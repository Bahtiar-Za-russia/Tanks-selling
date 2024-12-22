function changeImage() {
    const imgElement = document.getElementById('product-image');
    const selectElement = document.getElementById('image-select');
    const selectedImage = selectElement.value; // Получаем выбранное значение
    imgElement.src = selectedImage; // Меняем источник изображения
}