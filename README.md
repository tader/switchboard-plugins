# Switchboard community plugins

A live directory of community plugins for [Switchboard](https://github.com/tader/switchboard).

Switchboard fetches `plugins.json` when its Community browser opens or Refresh is clicked. The catalog is not shipped with Switchboard releases. Each listing installs one plugin folder; Switchboard resolves declared dependencies.

## Contribute a listing

Open a pull request updating `plugins.json`. Listings are reviewed before merging. Run `node validate.mjs` before submitting.

Each listing must have a unique plugin `id` matching its `plugin.json`, a plain-text `name` and `description`, and a GitHub `repo` in `owner/repository` format. Optional `icon` is an HTTPS raw.githubusercontent.com URL for the plugin icon. Set `path` to the independently installable plugin folder when a repository contains several plugins. Optional `ref` follows a branch, tag or commit; omit it for the default branch. Optional paths and refs must be omitted rather than set to empty strings.

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

## Microsoft authentication and Teams

Install **Microsoft Authentication** (`plugins/microsoft-authentication`) on the computer used for sign-in, with Edge or Chrome available. Add a Microsoft Authentication connection and complete its Teams web sign-in. Other Microsoft connections can select that same authentication source; the browser is used only for authentication.

Use a Switchboard version with authentication-source support. For a remote server, share the authentication connection through Peers and separately enable **Share authentication** for that peer. Update the shared **Microsoft** helper before adding Word, PowerPoint or Org Explorer to an existing installation. Microsoft still applies account permissions, token lifetimes and company sign-in policies.

The Teams listing points to `tader/switchboard-plugin-microsoft`, folder `plugins/teams`, and retains the `teams-web` plugin ID. It replaces the standalone Teams repository as the catalog source while preserving the connection and plugin-data identity during migration.
