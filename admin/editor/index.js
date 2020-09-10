import ImageCaption from "/admin/editor/image-caption.js";
import PullQuote from "/admin/editor/pull-quote.js";
import Youtube from "/admin/editor/youtube.js";

CMS.registerEditorComponent(ImageCaption);
CMS.registerEditorComponent(PullQuote);
CMS.registerEditorComponent(Youtube);

console.log("Registered custom editor components");
