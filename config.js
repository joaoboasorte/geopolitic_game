document.addEventListener('DOMContentLoaded', () => {
    let scale = 1;

    window.addEventListener('wheel', (event) => {
        event.preventDefault();
        if (event.deltaY < 0) {
            scale += 0.1;
        } else {
            scale = Math.max(0.1, scale - 0.1);
        }
        document.querySelector('.map-container').style.transform = `scale(${scale})`;
    }, { passive: false });

    const paths = document.querySelectorAll('path');
    const dynamicStateImage = document.getElementById('dynamic-state-image');
    const dynamicStateName = document.getElementById('dynamic-state-name');
    const travelTime = document.getElementById('travel-time');

    const clickedStateImage = document.getElementById('clicked-state-image');
    const clickedStateName = document.getElementById('clicked-state-name');
    const clickedFooterButton = document.getElementById('clicked-footer-button');
    const clickedTravelTime = document.getElementById('clicked-travel-time');
    const clickedRegionInfo = document.getElementById('clicked-region-info');

    paths.forEach(path => {
        path.addEventListener('mouseenter', () => {
            // Atualiza a parte dinâmica ao passar o mouse
            const stateId = path.getAttribute('id');
            const fullName = path.getAttribute('title');
            const imagePath = `img/${stateId}.png`;

            dynamicStateImage.src = imagePath;
            dynamicStateImage.style.display = 'block';
            dynamicStateName.textContent = fullName;
            travelTime.style.display = 'block';
            travelTime.textContent = 'Tempo estimado: ' + (Math.random() * 5 + 1).toFixed(1) + 'h';
        });

        path.addEventListener('click', () => {
            // Ao clicar numa região, fixa a informação clicada
            const stateId = path.getAttribute('id');
            const fullName = path.getAttribute('title');
            const imagePath = `img/${stateId}.png`;

            clickedStateImage.src = imagePath;
            clickedStateName.textContent = fullName;
            clickedTravelTime.textContent = 'Tempo estimado: ' + (Math.random() * 5 + 1).toFixed(1) + 'h';

            // Mostra a parte clicada que sobrepõe a fixa
            clickedRegionInfo.style.display = 'flex';
        });
    });

    // Lógica de viagem ao clicar no botão "VIAJAR" (parte clicada)
    clickedFooterButton.addEventListener('click', () => {
        alert("Você clicou para viajar!");
        // Implementar lógica de viagem...
    });
}); 