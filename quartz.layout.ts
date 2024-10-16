import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const githubSourceConfig = { 
  repoLink: "https://github.com/BramLeisink/quartz-vault",
  branch: "main",
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    // Component.Comments({
    //   provider: 'giscus',
    //   options: {
    //     // from data-repo
    //     repo: 'BramLeisink/quartz-vault',
    //     // from data-repo-id
    //     repoId: 'R_kgDOM9XudQ',
    //     // from data-category
    //     category: 'Announcements',
    //     // from data-category-id
    //     categoryId: 'DIC_kwDOM9Xudc4CjLbH',
    //   }
    // }),
  ],
  footer: Component.Footer({
    links: {
      // GitHub: "https://github.com/jackyzha0/quartz",
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
    // Component.DesktopOnly(Component.RecentNotes()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.DesktopOnly(Component.GithubSource(githubSourceConfig)),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
