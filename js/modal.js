(() => {
    const refs = {
      openModalBtn: document.querySelector("[data_modal_open]"),
      closeModalBtn: document.querySelector("[data_modal_close]"),
      modal: document.querySelector("[data_modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is_hidden");
    }
  })();