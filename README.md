# GitHub Actions in action - Playwright Java Tests

This repository contains end-to-end UI tests using [Playwright](https://playwright.dev/) with TypeScript and Jest.

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

- Node.js (LTS version recommended)
- IDE or editor of choice

### 2️⃣ Fork the repo

🔗 Documentation: [Fork a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

### 3️⃣ Clone the repo

```sh
git clone https://github.com/$yourGitHubUsername/gha-typescript-playwright.git
cd gha-typescript-playwright
```

### 4️⃣ Install Dependencies

```sh
npm install
npx playwright install --with-deps
```

### 5️⃣ Run Tests

```sh
npx playwright test
```

---

## 📝 Slides

[Link to slides](/slides/GitHub%20Actions%20in%20Action%20-%20TAD%202025-03.pdf)

---

## 🛠 Exercises

Each exercise has:
- Detailed instructions
- Link(s) to relevant GitHub Actions (and other) documentation

---

### 🚀 Exercise 1: Create a Basic Workflow

📂 Workflow file: `.github/workflows/01-basic-workflow.yaml`  
💡 Goal: Understand workflow structure and manually trigger a workflow.

#### 📌 Instructions

1. Inside the `.github/workflows/` directory, create a new file `01-basic-workflow.yaml`.
2. Define a workflow that:
    - Can be triggered manually
    - Runs a simple print command
3. Commit & push the workflow.
4. Trigger the workflow manually from GitHub Actions.
5. Observe the logs.

🔗 Relevant Documentation:
- [Workflow syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Triggering workflows manually](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)

---

### 🛠 Exercise 2: Run Playwright Tests in CI/CD

📂 Workflow file: `.github/workflows/02-run-tests.yaml`  
💡 Goal: Run Playwright tests in GitHub Actions.

#### 📌 Instructions

1. Create a workflow file that:
    - Runs Playwright tests on every push to `main`.
2. Commit & push the workflow.
3. Observe test execution in GitHub Actions logs.

🔗 Relevant Documentation:
- [Events that trigger workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [Using jobs in a workflow](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-jobs-in-a-workflow)
- [Adding scripts to your workflow](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/adding-scripts-to-your-workflow)
- [Playwright: Setting up CI](https://playwright.dev/docs/ci-intro)

---

### 🛠 Exercise 3: Cache Dependencies for Faster Builds

📂 Workflow file: `.github/workflows/03-cache-dependencies.yaml`  
💡 Goal: Cache dependencies to speed up workflow execution.

#### 📌 Instructions

1. Create a workflow file (based on `02-run-tests.yaml`) that:
    - Caches dependencies to avoid reinstalling them on every run.
    - Restores the cache if available, otherwise installs dependencies as usual.
2. Commit & push the workflow.
3. Observe the caching mechanism in the GitHub Actions logs.

🔗 Relevant Documentation:
- [Caching Dependencies to Speed Up Workflows](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows)

---

### 📊 Exercise 4: Upload Playwright Test Reports

📂 Workflow file: `.github/workflows/04-upload-reports.yaml`  
💡 Goal: Store test results (screenshots, logs) as GitHub Actions artifacts.

#### 📌 Instructions

1. Create a workflow file (based on `03-cache-dependencies.yaml`), that uploads the following folders:
    - For TypeScript: `playwright-report` and `test-results`
    - For Java: `target/reports` and `target/surefire-reports`
2. Commit & push changes.
   3Run the tests and check artifacts in GitHub Actions UI.

🔗 Relevant Documentation:
- [Storing and sharing data from a workflow](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts)

---

### 📌 Exercise 5: Show Test Report in GitHub UI

📂 Workflow file: `.github/workflows/05-show-report.yaml`  
💡 Goal: Display test results directly in the GitHub Actions summary tab.

#### 📌 Instructions

1. Create a workflow file (based on `03-cache-dependencies.yaml`), that displays the HTML test report using an action such as `phoenix-actions/test-reporting@v15` or a similar alternative.
    - For Java: Use the report file `target/reports/surefire.html`
    - For TypeScript: Use the report file `playwright-report/index.html`
2. Commit & push changes.
3. Observe the test report preview in the GitHub Actions summary tab.

🔗 Relevant Documentation:
- [phoenix-actions/test-reporting@v15](https://github.com/phoenix-actions/test-reporting)
- [Using `GITHUB_STEP_SUMMARY`](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary)

---

### 🔗 Exercise 6: Run Tests on Pull Requests

📂 Workflow file: `.github/workflows/06-run-on-pr.yaml`  
💡 Goal: Automatically test pull requests.

#### 📌 Instructions

1. Create a workflow file (based on `03-cache-dependencies.yaml`)
2. Modify the workflow’s `on:` field to trigger tests on pull requests.
3. Create a new branch, modify a test, and open a pull request.
4. Observe the test execution in GitHub Actions.

🔗 Relevant Documentation:
- [Events that trigger workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)

---

### 📌 Exercise 7: Fail PRs if Tests Fail

💡 Goal: Prevent merging if tests fail.

#### 📌 Instructions

1. Ensure your workflow is set up to run tests on pull requests (e.g., using your existing `.github/workflows/05-run-on-pr.yaml` file).
2. In GitHub, enable "Require status checks to pass before merging" (classic protection rule) for your branch.
3. Test the setup by pushing a commit that intentionally fails a test.

- ❗Note: This setup only works if you have a paid GitHub plan.
- 💡Note: For organizations on GitHub Team/Enterprise, you can also use [branch rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

🔗 Relevant Documentation:
- [Protecting branches (classic)](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)

---

### 🔧 Exercise 8: Create a Custom GitHub Action

📂 Workflow file: `.github/workflows/08-custom-action.yaml`  
💡 Goal: Create and use a custom GitHub Action.

#### 📌 Instructions

1. Edit your workflow to simulate Playwright test output and use the custom action to process it.
   <details>
   <summary>See hints</summary>

   Create a directory `test-results` and generates a test report file `report.txt` inside it.  
   Write fake test results to the file, simulating passed and failed tests.

   </details>
2. Inside `.github/actions/`, create a folder `playwright-summary`.
3. Inside the folder, create `action.yaml` and define a composite action that processes Playwright test results.
   <details>
   <summary>See hints</summary>

   The custom action processes the `test-results/report.txt` file, extracts its content, and formats a summary for display in GitHub job summaries.

   </details>
4. Commit & push your changes.
5. Observe the formatted test summary in the GitHub Actions logs.

✨ Note: Feel free to come up with an own idea and implement it as custom action.

🔗 Relevant Documentation:
- [Creating custom actions](https://docs.github.com/en/actions/creating-actions)

---

### ⏰ Exercise 9: Scheduled Regression Suites

📂 Workflow file: `.github/workflows/09-scheduled-regression.yaml`  
💡 Goal: Set up a workflow that automatically runs on a weekday schedule.

#### 📌 Instructions

1. Create a new workflow file  `09-scheduled-regression.yaml` (based on any of the already existing workflows)
2. Modify the workflow to trigger automatically on a schedule (weekdays at 1 AM UTC).
3. Commit & push your changes.
4. Observe test execution in GitHub Actions logs once the scheduled time passes.

❗ Note: To really observe the execution, set the trigger to execute shortly after you will have pushed.

🔗 Relevant Documentation:
- [GitHub Actions schedule event](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule)
- [CRON syntax for GitHub Actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onschedule)

---

### 🐳 Exercise 10: Containerized Testing with Docker
📂 Workflow file: `.github/workflows/10-containerized-testing.yaml`  
💡 Goal: Run tests inside Docker containers to ensure consistency across different environments.

#### 📌 Instructions

1. Create a workflow `10-containerized-testing.yaml` file (based on `03-cache-dependencies.yaml`) that:
    - Uses Docker containers to run tests.
    - Runs on every push and pull request.
2. Modify your test setup to execute inside a Docker container.
    - For Java: Use a `maven:latest` container to run tests.
    - For TypeScript: Use a `node:latest` container with Playwright pre-installed.
3. Ensure dependencies are installed inside the container.
4. Commit & push your changes.
5. Observe the test execution logs inside the container.

🔗 Relevant Documentation:
- [Using Docker in GitHub Actions](https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions)
- [Playwright Docker setup](https://playwright.dev/docs/ci#docker)
- [Maven in Docker](https://hub.docker.com/_/maven)
- [Node.js in Docker](https://hub.docker.com/_/node)
- [Running tests inside Docker](https://docs.docker.com/samples/testing/)

---

### ⚡ Exercise 11: Parallel Test Execution

📂 Workflow file: `.github/workflows/11-parallel-tests.yaml`  
💡 Goal: Configure a matrix strategy in GitHub Actions to run Playwright tests concurrently across different browsers or environments.

#### 📌 Instructions

1. Create a new workflow file `11-parallel-tests.yaml` (based on `03-cache-dependencies.yaml`).
2. Use a matrix strategy to define multiple browsers (e.g., `chromium`, `firefox`, `webkit`)
    - For Java: pass a system property (e.g. `-Dplaywright.browserName=${{ matrix.browser }}`).
    - For TypeScript: pass the browser name to `npx playwright test` (e.g. `--browser ${{ matrix.browser }}`).
3. Java only: Update your project files so tests can pick the correct browser:
    - Open `src/test/java/dev/christianbaumann/PlaywrightTest.java`
    - Uncomment the second @BeforeAll method and comment out the default one
4. Commit & push the new workflow (and any modified files).
5. Observe the concurrent runs in GitHub Actions. Each job in the matrix should execute in parallel, one for each browser/ environment.

🔗 Relevant Documentation:
- [Using a matrix strategy](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs)
- [Playwright CLI reference](https://playwright.dev/docs/test-cli)

--- 

### 🏁 Exercise 12: Cross-Platform Parallel Testing

📂 Workflow file: `.github/workflows/12-cross-platform-parallel.yaml`  
💡 Goal: Execute tests in parallel across all combinations of Ubuntu, Windows, Mac with Chromium, Firefox, and Webkit.

#### 📌 Instructions

1. Create a workflow (based on `11-parallel-tests.yaml`) file that:
    - Runs tests in parallel across Ubuntu, Windows, and Mac.
    - Tests each browser: Chromium, Firefox, and Webkit.
    - Uses a matrix strategy to cover all combinations.
2. Java: Keep the changes in `src/test/java/dev/christianbaumann/PlaywrightTest.java` from [Exercise 11](#exercise-11-parallel-test-execution)
3. Commit & push the workflow.
4. Observe the test execution across different platforms and browsers.

🔗 Relevant Documentation:
- [GitHub-hosted runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners)

---

### ⚙️ Exercise 13: Debugging GitHub Actions Workflows

📂 Workflow file: `.github/workflows/13-debugging.yaml`  
💡 Goal: Learn how to troubleshoot and debug GitHub Actions workflows effectively.

#### 📌 Instructions

1. Create a new workflow file `13-debugging.yaml`.
2. Add a job that prints environment variables and debug logs using `ACTIONS_STEP_DEBUG`.
3. Introduce an intentional failure (e.g., running a non-existent command) and observe error messages.
4. Enable debug logging in GitHub Actions settings.
5. Rerun the failed workflow with debugging enabled and analyze the logs.
6. Fix the issue and confirm a successful run.

📍 Relevant Documentation:
- [Enabling Debug Logging](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)
- [Understanding Workflow Logs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)

---

### 🔑 Exercise 14: Using Environment Variables and Secrets

📂 Workflow file: `.github/workflows/14-env-secrets.yaml`  
💡 Goal: Store and use environment variables and secrets securely in workflows.

#### 📌 Instructions

1. Create a new workflow file `14-env-secrets.yaml`.
2. Define environment variables inside a job.
3. Store a GitHub Actions secret (`MY_SECRET`) in the repository settings.
4. Access the secret in a workflow using `${{ secrets.MY_SECRET }}`.
5. Print environment variables but ensure secrets are not exposed in logs.
6. Confirm that the workflow executes successfully without revealing sensitive information.

📍 Relevant Documentation:
- [Using Environment Variables](https://docs.github.com/en/actions/learn-github-actions/environment-variables)
- [Storing Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
