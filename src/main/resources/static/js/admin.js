document.addEventListener('DOMContentLoaded', function () {
  // ===== Menu hamburguesa (mobile) =====
  const hamburger = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  function abrirMenu() {
    sidebar.classList.add('abierto');
    overlay.classList.add('activo');
  }
  function cerrarMenu() {
    sidebar.classList.remove('abierto');
    overlay.classList.remove('activo');
  }

  if (hamburger) hamburger.addEventListener('click', abrirMenu);
  if (overlay) overlay.addEventListener('click', cerrarMenu);

  // ===== Preview de imagenes en drop de archivo =====
  document.querySelectorAll('.form-file-drop').forEach(function (drop) {
    const input = drop.querySelector('input[type=file]');
    const label = drop.querySelector('.drop-label');
    if (!input) return;
    input.addEventListener('change', function () {
      if (input.files && input.files.length > 0) {
        if (label) label.textContent = input.files[0].name;
        drop.classList.add('activo');
      }
    });
  });

  // ===== Auto-cerrar alertas =====
  document.querySelectorAll('.alert-custom').forEach(function (alerta) {
    setTimeout(function () {
      alerta.style.transition = 'opacity .4s ease';
      alerta.style.opacity = '0';
      setTimeout(function () { alerta.remove(); }, 400);
    }, 4500);
  });

  // ===== Confirmacion de eliminar =====
  document.querySelectorAll('.confirmar-eliminar').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      const mensaje = form.getAttribute('data-mensaje') || '¿Seguro que deseas eliminar este registro?';
      if (!confirm(mensaje)) {
        e.preventDefault();
      }
    });
  });
});
