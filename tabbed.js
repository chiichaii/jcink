<script>
window.onload = function() {
    var labels = Array.from(document.querySelectorAll('.tab'));
    labels.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    var parentContainer = document.querySelector('.tabs-container');
    labels.forEach(function(label) {
        parentContainer.appendChild(label.parentElement);
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const tabContent = document.querySelectorAll('.tab-content');

    tabContent.forEach(content => {
        const codeBlocks = content.querySelectorAll('code');
        let urls = [];

        // Get the active tab's background color (highlight color)
        const activeTab = content.closest('.tabs-container').querySelector('input:checked + label');
        const tabHighlightColor = activeTab ? getComputedStyle(activeTab).backgroundColor : 'rgba(0, 0, 0, 0)';

        // If the active tab's color is found, apply a transparent version of it to the button background
        const buttonBgColor = tabHighlightColor ? tabHighlightColor.replace('rgb', 'rgba').replace(')', ', 0.2)') : 'rgba(0, 0, 0, 0)';

        // Loop through code blocks to find URLs
        codeBlocks.forEach(block => {
            const matches = block.textContent.match(/\[url=([^\]]+)\]/g);
            if (matches) {
                matches.forEach(url => {
                    // Extract URL from [url=URL]
                    const extractedUrl = url.replace('[url=', '').replace(']', '');
                    if (!urls.includes(extractedUrl)) {
                        urls.push(extractedUrl);
                    }
                });
            }
        });

        // Create a button for each URL found
        if (urls.length > 0) {
            const buttonContainer = content.querySelector('.url-buttons');
            urls.forEach(url => {
                const button = document.createElement('button');
                button.classList.add('url-button');
                button.setAttribute('data-url', url);
                button.textContent = `Go to ${url}`;
                button.style.backgroundColor = buttonBgColor; // Apply dynamic background color

                button.addEventListener('click', function() {
                    window.open(url, '_blank'); // Open the URL in a new tab
                });

                buttonContainer.appendChild(button);
            });
        }
    });
});

</script>
