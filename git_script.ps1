$repo = "https://github.com/basasindhu04/portfolio-gpp"
$messages = @(
    "Initial project scaffold",
    "Config Tailwind CSS",
    "Set up root layout and routing",
    "Add global styles",
    "Add basic Navbar",
    "Add personal tracking data structure",
    "Setup custom types and interfaces",
    "Implement Particle JS Background",
    "Add Hero Section skeleton",
    "Refine Hero Typography",
    "Add Framer motion to Hero",
    "Scaffold Projects Section",
    "Style Project Cards",
    "Add Tech Stack badges logic",
    "Populate ZK Rollup Project",
    "Populate SaaS Project",
    "Populate API Gateway Project",
    "Refactor projects filtering",
    "Add Lucide Icons dependency",
    "Add About Section",
    "Build Skills grid",
    "Add Experience component",
    "Add Education component",
    "Implement responsive design tweaks",
    "Add Dark Mode Theme styling",
    "Refine Card Hover states",
    "Add Parallax Scroll interactions",
    "Improve accessibility with reduced motion",
    "Update social contacts and README",
    "Final polished portfolio integration"
)

if (Test-Path -Path .git) {
    # remove hidden attributes first
    Get-ChildItem -Path .git -Recurse -Force | Where-Object { $_.Attributes -match "Hidden|ReadOnly" } | ForEach-Object { $_.Attributes = 'Normal' }
    Remove-Item -Recurse -Force .git
}

git init
git checkout -b main

for ($i = 0; $i -lt 29; $i++) {
    $msg = $messages[$i]
    "Update step $i" | Out-File -FilePath build.log -Append
    git add build.log
    git commit -m $msg
}

Remove-Item build.log
git add .
git commit -m $messages[29]

git remote add origin $repo
git remote -v
