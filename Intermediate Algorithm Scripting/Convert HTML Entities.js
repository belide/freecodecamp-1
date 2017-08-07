/**
 * Created by bikramkawan on 8/7/17.
 */
function convertHTML(str) {

    const res = str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, "&apos;");
    return res;
}

convertHTML("Dolce & Gabbana");
