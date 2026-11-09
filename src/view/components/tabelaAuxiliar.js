function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

export function Table({
    columns = [],
    data = [],
    emptyMessage = "Nenhum registro encontrado.",
    emptyDescription = ""
}) {

    const headers = columns.map(column => `
        <th>${escapeHTML(column.label)}</th>
    `).join("");

    const rows = data.length > 0
        ? data.map(item => `
            <tr>
                ${columns.map(column => `
                    <td>
                        ${escapeHTML(item[column.key])}
                    </td>
                `).join("")}
            </tr>
        `).join("")
        : `
            <tr>
                <td colspan="${columns.length}" class="table-empty">
                    <div class="table-empty-content">
                        <span class="empty-icon">▱</span>
                        <p>${escapeHTML(emptyMessage)}</p>
                        ${emptyDescription
                            ? `<small>${escapeHTML(emptyDescription)}</small>`
                            : ""}
                    </div>
                </td>
            </tr>
        `;

    return `
        <div class="table-container">
            <table class="custom-table">
                <thead>
                    <tr>${headers}</tr>
                </thead>

                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}