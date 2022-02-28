/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  overview: ["intro", { type: "autogenerated", dirName: "overview" }],
  foundations: [
    {
      type: "category",
      label: "Foundations",
      collapsible: false,
      link: { type: "doc", id: "foundations" },
      items: [{ type: "autogenerated", dirName: "foundations" }],
    },
  ],
  components: [
    {
      type: "category",
      label: "Components",
      collapsible: false,
      link: { type: "doc", id: "components" },
      items: [{ type: "autogenerated", dirName: "components" }],
    },
  ],
  patterns: [
    {
      type: "category",
      label: "Patterns",
      collapsible: false,
      link: { type: "doc", id: "patterns" },
      items: [{ type: "autogenerated", dirName: "patterns" }],
    },
  ],
};

module.exports = sidebars;
