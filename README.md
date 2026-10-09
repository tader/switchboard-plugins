# Switchboard community plugins

A live directory of community plugins for [Switchboard](https://github.com/tader/switchboard).

Switchboard fetches `plugins.json` when its Community browser opens or Refresh is clicked. The catalog is not shipped with Switchboard releases. Each listing installs one plugin folder; Switchboard resolves declared dependencies.

## Contribute a listing

Open a pull request updating `plugins.json`. Listings are reviewed before merging. Run `node validate.mjs` before submitting.

Each listing must have a unique plugin `id` matching its `plugin.json`, a plain-text `name` and `description`, and a GitHub `repo` in `owner/repository` format. Set `path` to the independently installable plugin folder when a repository contains several plugins. Optional `ref` follows a branch, tag or commit; omit it for the default branch. Optional paths and refs must be omitted rather than set to empty strings.

Include platform requirements and important setup prerequisites in the description. Keep executable code and dependency version requirements in the plugin repository. Switchboard reads requirements from the plugin manifest, not this directory.

## Format

```json
{
  "schemaVersion": 1,
  "plugins": [
    {
      "id": "example",
      "name": "Example",
      "description": "What it does and what it requires.",
      "repo": "owner/switchboard-plugin-example",
      "path": "plugins/example"
    }
  ]
}
```

Plugins run inside Switchboard with access to stored credentials. A catalog listing is not a security audit or a guarantee. Install plugins you trust.
