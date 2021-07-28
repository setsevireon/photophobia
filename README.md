# Photophobia

A boring dark theme for [Hugo][1].

![screenshot](https://raw.githubusercontent.com/setsevireon/photophobia/master/images/screenshot.png)

## Installation

### As a Hugo Module (recommended)

1. From your project's root directory, initiate the hugo module.

```
hugo mod init <git_repo_domain>/<your_user>/<your_project>
```
2. Add the theme's repo to your `config.[yaml,toml]`:

```yaml
theme: github.com/setsevireon/photophobia
```

```toml
theme = ["github.com/setsevireon/photophobia"]
```

### As Git Submodule

Inside the folder of your Hugo site run:

```
git submodule add https://github.com/setsevireon/photophobia.git themes/photophobia
```

For more information read the [official setup guide][2] of Hugo.

## The config file

You will find an example config file in [`demo/config.yaml`][3].

## Contributing

If you find a bug or have an idea for a feature, feel free to use the
[issue tracker][4] to let me know.


[1]: https://gohugo.io/
[2]: https://gohugo.io/overview/installing/
[3]: https://github.com/setsevireon/photophobia/blob/master/demo/config.yaml
[4]: https://github.com/setsevireon/photophobia/issues
