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

## Formerly bundled integrations

Switchboard bundles MCP, API Keys and OAuth. All other integrations below are installed from Community and maintained separately. Google and Microsoft apps declare their shared provider dependency; installing an app resolves it through this live catalog.

Before upgrading an existing instance, install its used provider plugins and any satellite plugins. Install the shared Google or Microsoft plugin explicitly too when migrating their apps: an older Switchboard can reuse its compatible bundled helper instead of downloading it. IDs, saved credentials, authentication methods, settings and plugin data paths are preserved. Install GitHub first if you need saved GitHub connections for private repository access; public installation works without a connection.

| Plugin | Repository | Plugin path |
| --- | --- | --- |
| Apple Calendar | [tader/switchboard-plugin-macos](https://github.com/tader/switchboard-plugin-macos) | `plugins/apple-calendar` |
| Apple Mail | [tader/switchboard-plugin-macos](https://github.com/tader/switchboard-plugin-macos) | `plugins/apple-mail` |
| Apple Reminders | [tader/switchboard-plugin-macos](https://github.com/tader/switchboard-plugin-macos) | `plugins/apple-reminders` |
| Bitbucket | [tader/switchboard-plugin-atlassian](https://github.com/tader/switchboard-plugin-atlassian) | `plugins/bitbucket` |
| GitHub | [tader/switchboard-plugin-github](https://github.com/tader/switchboard-plugin-github) | `plugins/github` |
| Gmail | [tader/switchboard-plugin-gmail](https://github.com/tader/switchboard-plugin-gmail) | `plugins/gmail` |
| Google | [tader/switchboard-plugin-google](https://github.com/tader/switchboard-plugin-google) | `plugins/google` |
| Google Calendar | [tader/switchboard-plugin-google-calendar](https://github.com/tader/switchboard-plugin-google-calendar) | `plugins/google-calendar` |
| Google Docs | [tader/switchboard-plugin-google-docs](https://github.com/tader/switchboard-plugin-google-docs) | `plugins/google-docs` |
| Google Drive | [tader/switchboard-plugin-google-drive](https://github.com/tader/switchboard-plugin-google-drive) | `plugins/google-drive` |
| Google Keep | [tader/switchboard-plugin-google-keep](https://github.com/tader/switchboard-plugin-google-keep) | `plugins/google-keep` |
| Google Sheets | [tader/switchboard-plugin-google-sheets](https://github.com/tader/switchboard-plugin-google-sheets) | `plugins/google-sheets` |
| Home Assistant | [tader/switchboard-plugin-home-assistant](https://github.com/tader/switchboard-plugin-home-assistant) | `plugins/home-assistant` |
| Jira and Confluence | [tader/switchboard-plugin-atlassian](https://github.com/tader/switchboard-plugin-atlassian) | `plugins/atlassian` |
| Microsoft | [tader/switchboard-plugin-microsoft](https://github.com/tader/switchboard-plugin-microsoft) | `plugins/microsoft` |
| Microsoft To Do | [tader/switchboard-plugin-microsoft-todo](https://github.com/tader/switchboard-plugin-microsoft-todo) | `plugins/microsoft-todo` |
| OneDrive | [tader/switchboard-plugin-onedrive](https://github.com/tader/switchboard-plugin-onedrive) | `plugins/onedrive` |
| Outlook Calendar | [tader/switchboard-plugin-outlook-calendar](https://github.com/tader/switchboard-plugin-outlook-calendar) | `plugins/outlook-calendar` |
| Outlook Mail | [tader/switchboard-plugin-outlook-mail](https://github.com/tader/switchboard-plugin-outlook-mail) | `plugins/outlook-mail` |
| Plex | [tader/switchboard-plugin-plex](https://github.com/tader/switchboard-plugin-plex) | `plugins/plex` |
| Shell command | [tader/switchboard-plugin-shell-command](https://github.com/tader/switchboard-plugin-shell-command) | `plugins/shell-command` |
| Spotify | [tader/switchboard-plugin-spotify](https://github.com/tader/switchboard-plugin-spotify) | `plugins/spotify` |
| Switchboard | [tader/switchboard-plugin-switchboard](https://github.com/tader/switchboard-plugin-switchboard) | `plugins/switchboard` |
| Todoist | [tader/switchboard-plugin-todoist](https://github.com/tader/switchboard-plugin-todoist) | `plugins/todoist` |
