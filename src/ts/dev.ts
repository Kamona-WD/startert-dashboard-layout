import type { Alpine } from 'alpinejs'

export default (Alpine: Alpine) => {
    document.addEventListener('alpine:init', () => {
        Alpine.data('setup', function () {
            return {
                loading: true,
            }
        })
    })
}
