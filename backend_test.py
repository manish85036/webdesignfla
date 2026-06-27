import requests
import sys
from datetime import datetime

class BackendAPITester:
    def __init__(self, base_url="https://webdesign-modern.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, check_content=None):
        """Run a single API test"""
        url = f"{self.base_url}{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            # Additional content checks
            if success and check_content:
                content = response.text if response.headers.get('content-type', '').startswith('text') else response.json()
                for key, expected_value in check_content.items():
                    if isinstance(content, dict):
                        if key not in content or content[key] != expected_value:
                            success = False
                            print(f"   ❌ Content check failed: {key} = {content.get(key)} (expected {expected_value})")
                    elif isinstance(content, str):
                        if expected_value not in content:
                            success = False
                            print(f"   ❌ Content check failed: '{expected_value}' not found in response")
            
            if success:
                self.tests_passed += 1
                print(f"   ✅ Passed - Status: {response.status_code}")
                if check_content:
                    print(f"   ✅ Content checks passed")
            else:
                print(f"   ❌ Failed - Expected {expected_status}, got {response.status_code}")
                self.failed_tests.append({
                    "test": name,
                    "endpoint": endpoint,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "response": response.text[:200] if hasattr(response, 'text') else str(response)
                })

            return success, response

        except Exception as e:
            print(f"   ❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "endpoint": endpoint,
                "error": str(e)
            })
            return False, None

    def test_health(self):
        """Test /api/health endpoint"""
        success, response = self.run_test(
            "Health Check",
            "GET",
            "/api/health",
            200,
            check_content={"status": "healthy", "service": "webdesignfla"}
        )
        return success

    def test_sitemap(self):
        """Test /api/sitemap.xml endpoint"""
        success, response = self.run_test(
            "Sitemap XML",
            "GET",
            "/api/sitemap.xml",
            200
        )
        if success and response:
            # Check if it's valid XML and contains required routes
            content = response.text
            required_routes = ["/", "/web-design/", "/seo/", "/social/", "/portfolio/", "/privacy-policy/"]
            all_present = all(route in content for route in required_routes)
            if all_present:
                print(f"   ✅ All 6 routes present in sitemap")
            else:
                print(f"   ❌ Some routes missing from sitemap")
                success = False
        return success

    def test_robots(self):
        """Test /api/robots.txt endpoint"""
        success, response = self.run_test(
            "Robots.txt",
            "GET",
            "/api/robots.txt",
            200
        )
        if success and response:
            content = response.text
            if "Sitemap:" in content and "User-agent:" in content:
                print(f"   ✅ Robots.txt contains required directives")
            else:
                print(f"   ❌ Robots.txt missing required directives")
                success = False
        return success

    def test_api_root(self):
        """Test /api/ root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET",
            "/api/",
            200
        )
        return success

    def test_status_get(self):
        """Test GET /api/status endpoint"""
        success, response = self.run_test(
            "Status GET",
            "GET",
            "/api/status",
            200
        )
        return success

    def test_status_post(self):
        """Test POST /api/status endpoint"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        success, response = self.run_test(
            "Status POST",
            "POST",
            "/api/status",
            200,
            data=test_data
        )
        if success and response:
            try:
                data = response.json()
                if "id" in data and "client_name" in data and "timestamp" in data:
                    print(f"   ✅ Response contains required fields")
                else:
                    print(f"   ❌ Response missing required fields")
                    success = False
            except:
                print(f"   ❌ Failed to parse JSON response")
                success = False
        return success

def main():
    print("=" * 60)
    print("WebDesignFLA Backend API Test Suite")
    print("=" * 60)
    
    tester = BackendAPITester()

    # Run all tests
    print("\n📋 Running Backend API Tests...\n")
    
    tester.test_health()
    tester.test_sitemap()
    tester.test_robots()
    tester.test_api_root()
    tester.test_status_get()
    tester.test_status_post()

    # Print summary
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    print("=" * 60)
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for fail in tester.failed_tests:
            print(f"\n  • {fail['test']}")
            print(f"    Endpoint: {fail['endpoint']}")
            if 'error' in fail:
                print(f"    Error: {fail['error']}")
            else:
                print(f"    Expected: {fail['expected']}, Got: {fail['actual']}")
    
    success_rate = (tester.tests_passed / tester.tests_run * 100) if tester.tests_run > 0 else 0
    print(f"\n✨ Success Rate: {success_rate:.1f}%\n")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
