export function row(content, styles = "") {
  return `
        <div class="row" style="${styles}">${content}</div>
    `;
}

export function col(content) {
  return `
        <div class="col-sm">${content}</div>
    `;
}

export function css(styles = {}) {
  if(typeof(styles) === 'string') return styles
  const toCssString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toCssString).join(";");
}


export function block( header, type) {
  return `
        <form name="${type}">
            <h5>${header}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="${type === 'image' ? "Source" : "Content"}">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="Styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Add</button>
        </form>
        <hr>
    `;
}