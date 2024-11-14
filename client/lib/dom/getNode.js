// getNode
// function getNode(node, context = document) {
//   // if(typeof context === 'string')
//   if (context.nodeType !== 9) {
//     context = document.querySelector(context);
//   }

//   return context.querySelector(node);
// }

function getNode(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context);
  return context.querySelector(node);
}

// getNodes
// function getNodes(node, context = document) {
//   // if(typeof context === 'string')
//   if (context.nodeType !== 9) {
//     context = document.querySelector(context);
//   }

//   return context.querySelectorAll(node);
// }

function getNodes(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context);
  return context.querySelectorAll(node);
}
