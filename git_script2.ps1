$repo = "https://github.com/basasindhu04/portfolio-gpp.git"

if (Test-Path -Path .git) {
    Get-ChildItem -Path .git -Recurse -Force -ErrorAction Ignore | Where-Object { $_.Attributes -match "Hidden|ReadOnly" } | ForEach-Object { $_.Attributes = 'Normal' }
    Remove-Item -Recurse -Force .git -ErrorAction Ignore
}

git init
git checkout -b main

git add package.json pnpm-lock.yaml package-lock.json .gitignore
git commit -m "chore: initial project setup and dependencies"

git add tsconfig.json postcss.config.mjs next.config.mjs next-env.d.ts components.json
git commit -m "chore: configure typescript, tailwind css, and next.js"

git add public
git commit -m "chore: add public static graphics and assets"

# Sometimes styles directory doesn't exist, we add app/globals.css too
git add styles app/globals.css
git commit -m "feat: add global typography and custom theming"

git add lib
git commit -m "feat: setup data source and application utilities"

git add hooks
git commit -m "feat: add custom application react hooks"

git add components/ui
git commit -m "feat: integrate radix ui core components"

git add components/neural-network-background.tsx components/hero-section.tsx
git commit -m "feat: build hero section with interactive neural background"

# Ensure remaining components are grouped nicely
git add components
git commit -m "feat: implement main portfolio view components (projects, about, contact)"

git add app
git commit -m "feat: scaffold next.js root layout and primary routing"

git add README.md
git commit -m "docs: finalize project documentation and instructions"

# Ensure anything missed is also added finally (so nothing goes missing)
git add .
git commit -m "chore: finalize remaining configuration and clean up"

git remote add origin $repo
git push -u origin main --force
