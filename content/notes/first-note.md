---
title: Rebasing your branch.
description: Because I often don't remember this, better to note this for my later self 🤷🏻‍♂️.
category: note
publication_date: 2024-04-9
---

## A good note taking can make your life easier!

To use Git to rebase your branch against the target branch:

1. Open a terminal and change to your project.
Ensure you have the latest contents of the target branch. In this example, the target branch is `develop`:

```bash
git fetch origin develop
```

2. Check out your branch:

```bash
git checkout my-branch
```

3. Optional. Create a backup of your branch:

```bash
git branch my-branch-backup
```

4. Changes added to my-branch after this point are lost if you restore from the backup branch.

Rebase against the `develop` branch:

```bash
git rebase origin/develop
```

5. If merge conflicts exist:
  
  Fix the conflicts in your editor.
  1. Add the files:

```bash
git add .
```

  2. Continue the rebase:

```bash
git rebase --continue
```

6. Force push your changes to the target branch, while protecting others’ commits:

```bash
git push origin my-branch --force-with-lease
````
