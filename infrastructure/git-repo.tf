resource "github_repository" "github-repo" {
  name = "baires-coding-challenge"

  # never change github
  lifecycle {
    ignore_changes = all
  }
}


resource "github_branch" "main-branch" {
  repository = github_repository.github-repo.name
  branch     = var.github_main_branch
}

output "current-commit-sha" {
  value = github_branch.main-branch.sha
}
