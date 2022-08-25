resource "vercel_project" "frontend_app" {
  name = "bwitter"

  framework        = "nextjs"
  build_command    = "yarn nx build apps-client --prod"
  output_directory = "dist/packages/apps/client"

  git_repository = {
    type = "github"
    repo = github_repository.github-repo.full_name
  }

  environment = [
    {
      key   = "NX_API_HOST"
      value = heroku_app.api.web_url
      target = [
        "production", "preview", "development"
      ]
    }
  ]
}
