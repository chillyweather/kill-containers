//@ts-nocheck
const selected = figma.currentPage.selection;
const currentPage = figma.currentPage;

function deleteContainer(frame) {
  const foundContainer = frame.findAll((node) =>
    node.name.includes("container-")
  );
  if (foundContainer.length > 0) {
    const content = foundContainer[0].children[0];
    content.layoutPositioning = "ABSOLUTE";
    figma.ungroup(foundContainer[0]);
  }
}
if (selected.length === 0) {
  figma.closePlugin();
  return;
} else {
  selected.forEach((node) => deleteContainer(node));
}
figma.closePlugin();
