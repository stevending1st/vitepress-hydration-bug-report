# Warn `Hydration completed but contains mismatches.` and Custom components are not rendered

[issue link](https://github.com/vuejs/vitepress/issues/1918)

### Describe the bug

When markdown file is added `<script>`, the custom component does not work properly and an error is reported with the error message `Hydration completed but contains mismatches.`.


### Reproduction

Demo repo:  https://github.com/stevending1st/vitepress-hydration-bug-report

Here are three markdown files, all of which introduce custom components.

```md
// test-1.md
---
title: ❌
---

<script setup lang="ts">
// hello test
</script>

<TestInfo />
```

```
// test-2.md
---
title: ❌
---

<script setup lang="ts">
import { ref } from "vue";
import yaml from "yaml";
import "uno.css";
</script>

<TestInfo />
```

```
// test-3.md
---
title: ❌
---

<script setup lang="ts">
const data = 123;
</script>

<TestInfo />

```

When I execute `pnpm dev`(`vitepress dev website`), accessing `/test-1`, `/test-2`, `/test-3` works fine.

When I execute `pnpm build && pnpm preview`(`vue-tsc && vitepress build website && vitepress preview website`), visit `/test-1`, `/test-2`, `/test-3`, my custom component does not work properly and the F12 console reports `Hydration completed but contains mismatches.`.


### Expected behavior

When I add the valid `<script>` and execute `vue-tsc && vitepress build website && vitepress preview website`, the custom components will display normally and the console will not report an error.


### System Info

```shell
System:
    OS: Windows 10 10.0.22000
    CPU: (16) x64 12th Gen Intel(R) Core(TM) i5-12500H
    Memory: 1.13 GB / 15.73 GB
  Binaries:
    Node: 16.17.1 - C:\Program Files\nodejs\node.EXE
    Yarn: 1.22.19 - ~\AppData\Roaming\npm\yarn.CMD
    npm: 8.15.0 - C:\Program Files\nodejs\npm.CMD
  Browsers:
    Edge: Spartan (44.22000.120.0), Chromium (109.0.1518.78)
    Internet Explorer: 11.0.22000.120
  npmPackages:
    vitepress: 1.0.0-alpha.32 => 1.0.0-alpha.32
```
