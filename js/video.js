let modal, player;

    function closeModal(modal) {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal(modal) {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    document.addEventListener('click', function (event) {
        const target = event.target;

        if (target.id == 'modal' || target.id == 'modalGallery') {
            modal = document.querySelector(`.${target.id}`);
            openModal(modal);
        }

        if (target.id == 'modalGalleryClose' || target.id == 'modalClose') {
            closeModal(modal);
            player.stopVideo();
        }

    });
    //Youtube Video
let tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '620',
            width: '1040',
            videoId: 'WvO1eYl-rlk',

        });
    }