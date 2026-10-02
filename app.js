/**
 * ሳዳም ሱቅ | Saddam Shop
 * Modern Neighborhood Grocery Delivery Web App
 * Contact: 0935911623
 */

// 1. Initial Default Product Catalog (15 Pre-loaded items with high quality Unsplash placeholders)
const DEFAULT_PRODUCTS = [
  {
    id: "prod-1",
    nameAm: "ስኳር",
    nameEn: "Sekor (Sugar)",
    price: 200,
    category: "groceries",
    unit: "1 ኪሎ / 1 Kg",
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ንፁህ ጥራት ያለው ነጭ ስኳር ለሻይና ቡና"
  },
  {
    id: "prod-2",
    nameAm: "እሩዝ",
    nameEn: "Eruz (Rice)",
    price: 150,
    category: "groceries",
    unit: "1 ኪሎ / 1 Kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ረዥም እሸት ጥራት ያለው እሩዝ"
  },
  {
    id: "prod-3",
    nameAm: "መካሮኒ",
    nameEn: "Mekoreni (Macaroni)",
    price: 190,
    category: "groceries",
    unit: "1 ፓኬት / 1 Pack",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281072?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ጣፋጭና በቀላሉ የሚበስል መካሮኒ"
  },
  {
    id: "prod-4",
    nameAm: "የዳቦ ዱቄት",
    nameEn: "Yedabo duket (Wheat Flour)",
    price: 150,
    category: "groceries",
    unit: "1 ኪሎ / 1 Kg",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ለዳቦና ኬክ የሚሆን የመጀመሪያ ደረጃ ዱቄት"
  },
  {
    id: "prod-5",
    nameAm: "2 ሊትር ውኃ",
    nameEn: "2L Water (Mineral Water)",
    price: 60,
    category: "beverages",
    unit: "2 ሊትር / 2 Liters",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "የታሸገ የተጣራ ንፁህ የተፈጥሮ ምንጭ ውኃ"
  },
  {
    id: "prod-6",
    nameAm: "እንቁላል",
    nameEn: "Enkulal (Fresh Eggs)",
    price: 24,
    category: "fresh",
    unit: "በቁጥር / Per Egg",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ትኩስ የሀበሻና የፈርም እንቁላል"
  },
  {
    id: "prod-7",
    nameAm: "እንጀራ",
    nameEn: "Enjera (Fresh Injera)",
    price: 30,
    category: "fresh",
    unit: "1 እንጀራ / Per Piece",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ትኩስ አይነተ ብዙ የጤፍ እንጀራ"
  },
  {
    id: "prod-8",
    nameAm: "ሳን ቺፕስ",
    nameEn: "Sun chips (Crispy Chips)",
    price: 40,
    category: "snacks",
    unit: "1 ፓኬት / 1 Pack",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ጣፋጭና ቆንጆ ቺፕስ መክሰስ"
  },
  {
    id: "prod-9",
    nameAm: "ሮል ኦሞ (በትንሹ)",
    nameEn: "Roll Omo (Small Pack)",
    price: 750,
    category: "cleaning",
    unit: "አነስተኛ መጠን / Small Pack",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ልብስን የሚያነጣና የሚያጠራ ሮል ኦሞ"
  },
  {
    id: "prod-10",
    nameAm: "ሮል ኦሞ (በትልቁ)",
    nameEn: "Roll Omo (Large Pack)",
    price: 1800,
    category: "cleaning",
    unit: "ትልቅ መጠን / Large Pack",
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ለረጅም ጊዜ የሚያገለግል ትልቅ ሮል ኦሞ"
  },
  {
    id: "prod-11",
    nameAm: "ዘይት",
    nameEn: "Zeyt (Cooking Oil 5L)",
    price: 2000,
    category: "groceries",
    unit: "5 ሊትር ጀሪካን / 5 Liters",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "የምግብ ማብሰያ ንፁህ የሱፍ/የዘንባባ ዘይት"
  },
  {
    id: "prod-12",
    nameAm: "ሶፍት",
    nameEn: "Soft (Facial Tissue)",
    price: 80,
    category: "hygiene",
    unit: "1 ጥቅል / 1 Pack",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ለስላሳና ንፁህ የፊትና የእጅ ሶፍት"
  },
  {
    id: "prod-13",
    nameAm: "ዋይፕስ",
    nameEn: "Wipes (Wet Wipes)",
    price: 140,
    category: "hygiene",
    unit: "1 ፓኬት / 1 Pack",
    image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "እርጥብ የንፅህና መጠበቂያ ዋይፕስ"
  },
  {
    id: "prod-14",
    nameAm: "ለስላሳ መጠጥ",
    nameEn: "Pepsi / Coca Cola (500ml)",
    price: 70,
    category: "beverages",
    unit: "ጠርሙስ / 1 Bottle",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ቀዝቃዛ ፔፕሲ፣ ኮካ ኮላ እና ፋንታ"
  },
  {
    id: "prod-15",
    nameAm: "ሳሙና",
    nameEn: "Samuna (Toilet/Bath Soap)",
    price: 50,
    category: "hygiene",
    unit: "1 ፍሬ / 1 Bar",
    image: "https://images.unsplash.com/photo-1607006314144-482260662d53?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    description: "ጥሩ መዓዛ ያለው የገላና የእጅ ሳሙና"
  }
];

// 2. Application State
const SHOP_PHONE = "0935911623";
const SHOP_PHONE_INTL = "+251935911623";

let products = [];
let cart = {}; // { [productId]: quantity }
let currentCategory = "all";
let searchQuery = "";
let isAdminLoggedIn = false;
let editingProductId = null;
let lastPlacedOrder = null;

// LocalStorage Keys
const STORAGE_KEYS = {
  PRODUCTS: "sadam_shop_products_v2",
  CART: "sadam_shop_cart",
  CUSTOMER: "sadam_shop_customer_info",
  ADMIN: "sadam_shop_admin_session",
  ORDERS: "sadam_shop_orders_history"
};

// 3. Initialization
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  loadCart();
  checkAdminAuth();
  setupEventListeners();
  loadSavedCustomerInfo();
  renderProducts();
  renderCart();
  renderOrdersHistory();
});

// Load products from LocalStorage or initialize defaults
function loadProducts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (saved) {
      products = JSON.parse(saved);
      // Ensure all 15 default products exist if empty
      if (!Array.isArray(products) || products.length === 0) {
        products = [...DEFAULT_PRODUCTS];
        saveProducts();
      }
    } else {
      products = [...DEFAULT_PRODUCTS];
      saveProducts();
    }
  } catch (e) {
    console.error("Error loading products:", e);
    products = [...DEFAULT_PRODUCTS];
  }
}

function saveProducts() {
  try {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  } catch (e) {
    console.error("Error saving products:", e);
  }
}

// Load Cart
function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.CART);
    cart = saved ? JSON.parse(saved) : {};
  } catch (e) {
    cart = {};
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  } catch (e) {
    console.error("Error saving cart:", e);
  }
}

// 4. Cart Management
function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  if (!product.inStock) {
    showToast("ይቅርታ፣ ይህ እቃ በአሁኑ ሰዓት አልቋል!", "warning");
    return;
  }

  const currentQty = cart[productId] || 0;
  cart[productId] = currentQty + qty;
  saveCart();
  renderCart();
  updateProductCardQuantity(productId);
  animateCartBadge();
  showToast(`${product.nameAm} ወደ ቅርጫት ተጨምሯል (+${qty})`, "success");
}

function updateCartQuantity(productId, delta) {
  const currentQty = cart[productId] || 0;
  const newQty = currentQty + delta;
  const product = products.find(p => p.id === productId);

  if (newQty <= 0) {
    delete cart[productId];
    if (product) {
      showToast(`${product.nameAm} ከቅርጫት ተወግዷል`, "info");
    }
  } else {
    cart[productId] = newQty;
  }

  saveCart();
  renderCart();
  updateProductCardQuantity(productId);
  animateCartBadge();
}

function removeFromCart(productId) {
  const product = products.find(p => p.id === productId);
  delete cart[productId];
  saveCart();
  renderCart();
  updateProductCardQuantity(productId);
  animateCartBadge();
  if (product) {
    showToast(`${product.nameAm} ከቅርጫት ተሰርዟል`, "info");
  }
}

function clearCart() {
  if (Object.keys(cart).length === 0) return;
  if (confirm("እርግጠኛ ነዎት ቅርጫቱን ባዶ ማድረግ ይፈልጋሉ?")) {
    cart = {};
    saveCart();
    renderCart();
    renderProducts();
    animateCartBadge();
    showToast("ቅርጫት ሙሉ በሙሉ ፀድቷል", "info");
  }
}

function getCartTotals() {
  let itemCount = 0;
  let subtotal = 0;

  for (const [id, qty] of Object.entries(cart)) {
    const item = products.find(p => p.id === id);
    if (item && qty > 0) {
      itemCount += qty;
      subtotal += item.price * qty;
    }
  }

  return { itemCount, subtotal };
}

function animateCartBadge() {
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(badge => {
    badge.classList.remove("animate-cart-bounce");
    void badge.offsetWidth; // trigger reflow
    badge.classList.add("animate-cart-bounce");
  });
}

// 5. Rendering Functions
function renderProducts() {
  const grid = document.getElementById("product-grid");
  const emptyState = document.getElementById("products-empty");
  const countDisplay = document.getElementById("displayed-product-count");

  if (!grid) return;

  const normalizedSearch = searchQuery.trim().toLowerCase();

  const filtered = products.filter(p => {
    // Category match
    const matchCategory = (currentCategory === "all" || p.category === currentCategory);

    // Search match across Amharic, English, Category & Unit
    const matchSearch = !normalizedSearch ||
      p.nameAm.toLowerCase().includes(normalizedSearch) ||
      p.nameEn.toLowerCase().includes(normalizedSearch) ||
      (p.description && p.description.toLowerCase().includes(normalizedSearch)) ||
      p.category.toLowerCase().includes(normalizedSearch);

    return matchCategory && matchSearch;
  });

  if (countDisplay) {
    countDisplay.textContent = `${filtered.length} እቃዎች`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  grid.innerHTML = filtered.map(p => {
    const inCartQty = cart[p.id] || 0;
    const isOutOfStock = !p.inStock;

    return `
      <div class="product-card bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between relative group ${isOutOfStock ? 'opacity-70 grayscale-[30%]' : ''}" data-product-id="${p.id}">
        <!-- Category & Stock Badges -->
        <div class="absolute top-3 left-3 z-10 flex flex-col gap-1">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 shadow-sm backdrop-blur-sm">
            ${getCategoryLabel(p.category)}
          </span>
          ${isOutOfStock ? `
            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-500 text-white shadow">
              አልቋል / Out of Stock
            </span>
          ` : ''}
        </div>

        ${isAdminLoggedIn ? `
          <!-- Quick Admin Edit Trigger -->
          <div class="absolute top-3 right-3 z-10 flex gap-1">
            <button onclick="openEditProductModal('${p.id}')" title="ይህንን እቃ አርትዕ / Edit" class="p-1.5 rounded-full bg-white/90 shadow text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            </button>
          </div>
        ` : ''}

        <!-- Product Image Container -->
        <div class="relative w-full pt-[75%] bg-slate-50 overflow-hidden">
          <img 
            src="${p.image}" 
            alt="${p.nameAm} - ${p.nameEn}"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80'"
          />
        </div>

        <!-- Product Details -->
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-1 mb-1">
              <h3 class="text-base md:text-lg font-bold text-slate-900 leading-tight">
                ${p.nameAm}
              </h3>
            </div>
            <p class="text-xs text-slate-500 font-medium mb-1.5">${p.nameEn}</p>
            <div class="flex items-center gap-1.5 text-xs text-slate-600 mb-3">
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span class="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-medium text-slate-700">${p.unit}</span>
            </div>
          </div>

          <!-- Price & Action Button Area -->
          <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <div>
              <span class="text-xs text-slate-400 block font-normal">ዋጋ / Price</span>
              <div class="flex items-baseline gap-1">
                <span class="text-lg md:text-xl font-extrabold text-emerald-700 tracking-tight">${p.price}</span>
                <span class="text-xs font-bold text-emerald-600">ETB</span>
              </div>
            </div>

            <!-- In-cart Controls or Add Button -->
            <div id="btn-container-${p.id}">
              ${renderCardActionButton(p, inCartQty, isOutOfStock)}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderCardActionButton(product, inCartQty, isOutOfStock) {
  if (isOutOfStock) {
    return `
      <button disabled class="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-400 cursor-not-allowed">
        አልቋል
      </button>
    `;
  }

  if (inCartQty > 0) {
    return `
      <div class="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-xl p-0.5 shadow-sm">
        <button 
          onclick="updateCartQuantity('${product.id}', -1)"
          aria-label="Decrease quantity"
          class="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-emerald-700 font-bold hover:bg-emerald-600 hover:text-white transition shadow-xs"
        >
          -
        </button>
        <span class="w-8 text-center text-xs font-extrabold text-emerald-900">${inCartQty}</span>
        <button 
          onclick="updateCartQuantity('${product.id}', 1)"
          aria-label="Increase quantity"
          class="w-7 h-7 flex items-center justify-center rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition shadow-xs"
        >
          +
        </button>
      </div>
    `;
  }

  return `
    <button 
      onclick="addToCart('${product.id}', 1)" 
      class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs md:text-sm font-bold shadow-sm hover:shadow transition"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
      <span>ጨምር</span>
    </button>
  `;
}

function updateProductCardQuantity(productId) {
  const container = document.getElementById(`btn-container-${productId}`);
  if (!container) return;

  const product = products.find(p => p.id === productId);
  if (!product) return;

  const inCartQty = cart[productId] || 0;
  container.innerHTML = renderCardActionButton(product, inCartQty, !product.inStock);
}

function renderCart() {
  const cartList = document.getElementById("cart-items-list");
  const cartEmpty = document.getElementById("cart-empty-state");
  const cartFooter = document.getElementById("cart-footer");
  const countBadges = document.querySelectorAll(".cart-count-badge");
  const subtotalDisplays = document.querySelectorAll(".cart-subtotal-display");
  const totalDisplays = document.querySelectorAll(".cart-total-display");
  const drawerItemCount = document.getElementById("drawer-item-count");

  const { itemCount, subtotal } = getCartTotals();

  // Update badges
  countBadges.forEach(badge => {
    badge.textContent = itemCount;
    if (itemCount > 0) {
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  });

  if (drawerItemCount) {
    drawerItemCount.textContent = `(${itemCount} እቃዎች)`;
  }

  subtotalDisplays.forEach(el => el.textContent = `${subtotal.toLocaleString()} ETB`);
  totalDisplays.forEach(el => el.textContent = `${subtotal.toLocaleString()} ETB`);

  if (!cartList) return;

  const cartEntries = Object.entries(cart).filter(([_, qty]) => qty > 0);

  if (cartEntries.length === 0) {
    cartList.innerHTML = "";
    if (cartEmpty) cartEmpty.classList.remove("hidden");
    if (cartFooter) cartFooter.classList.add("hidden");
    return;
  }

  if (cartEmpty) cartEmpty.classList.add("hidden");
  if (cartFooter) cartFooter.classList.remove("hidden");

  cartList.innerHTML = cartEntries.map(([id, qty]) => {
    const item = products.find(p => p.id === id);
    if (!item) return "";
    const itemTotal = item.price * qty;

    return `
      <div class="flex items-center gap-3 p-3 bg-slate-50/80 rounded-2xl border border-slate-100 hover:border-emerald-200 transition">
        <!-- Thumbnail -->
        <img 
          src="${item.image}" 
          alt="${item.nameAm}" 
          class="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
        />

        <!-- Info -->
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-1">
            <h4 class="text-sm font-bold text-slate-800 truncate">${item.nameAm}</h4>
            <button 
              onclick="removeFromCart('${item.id}')"
              class="text-slate-400 hover:text-rose-600 transition p-1"
              title="አስወግድ"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
          <p class="text-xs text-slate-500">${item.nameEn} • <span class="font-medium text-emerald-700">${item.price} ETB</span></p>

          <!-- Stepper and subtotal -->
          <div class="flex items-center justify-between mt-2">
            <div class="inline-flex items-center bg-white border border-slate-200 rounded-lg p-0.5">
              <button 
                onclick="updateCartQuantity('${item.id}', -1)"
                class="w-6 h-6 flex items-center justify-center rounded text-slate-600 font-bold hover:bg-slate-100"
              >
                -
              </button>
              <span class="w-7 text-center text-xs font-bold text-slate-800">${qty}</span>
              <button 
                onclick="updateCartQuantity('${item.id}', 1)"
                class="w-6 h-6 flex items-center justify-center rounded text-emerald-700 font-bold hover:bg-emerald-50"
              >
                +
              </button>
            </div>
            <span class="text-xs font-extrabold text-slate-900">${itemTotal.toLocaleString()} ETB</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// 6. Category Filter Helpers
function getCategoryLabel(cat) {
  const map = {
    groceries: "ቋሚ ምግቦች / Pantry",
    beverages: "መጠጦች / Drinks",
    fresh: "ትኩስ ምግቦች / Fresh",
    cleaning: "የፅዳት እቃዎች / Cleaning",
    hygiene: "የንፅህና መጠበቂያ / Hygiene",
    snacks: "መክሰስ / Snacks"
  };
  return map[cat] || cat;
}

function setCategory(cat) {
  currentCategory = cat;
  const buttons = document.querySelectorAll(".category-pill");
  buttons.forEach(btn => {
    const btnCat = btn.getAttribute("data-category");
    if (btnCat === cat) {
      btn.className = "category-pill shrink-0 px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-emerald-600 text-white shadow-sm transition";
    } else {
      btn.className = "category-pill shrink-0 px-4 py-2 rounded-full text-xs md:text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition";
    }
  });
  renderProducts();
}

// 7. Mandatory Delivery Checkout & Order Actions
function loadSavedCustomerInfo() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.CUSTOMER);
    if (saved) {
      const data = JSON.parse(saved);
      if (document.getElementById("checkout-name")) document.getElementById("checkout-name").value = data.name || "";
      if (document.getElementById("checkout-phone")) document.getElementById("checkout-phone").value = data.phone || "";
      if (document.getElementById("checkout-block")) document.getElementById("checkout-block").value = data.block || "";
      if (document.getElementById("checkout-house")) document.getElementById("checkout-house").value = data.house || "";
      if (document.getElementById("checkout-note")) document.getElementById("checkout-note").value = data.note || "";
      if (document.getElementById("remember-customer")) document.getElementById("remember-customer").checked = true;
    }
  } catch (e) {}
}

function openCheckoutModal() {
  const { itemCount } = getCartTotals();
  if (itemCount === 0) {
    showToast("እባክዎ መጀመሪያ እቃ ወደ ቅርጫት ይጨምሩ!", "warning");
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById("checkout-modal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    // Populate order preview summary in checkout form
    renderCheckoutSummaryPreview();
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

function renderCheckoutSummaryPreview() {
  const preview = document.getElementById("checkout-items-preview");
  const { itemCount, subtotal } = getCartTotals();
  if (!preview) return;

  const entries = Object.entries(cart).filter(([_, qty]) => qty > 0);
  preview.innerHTML = `
    <div class="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100 text-xs">
      <div class="flex justify-between items-center font-bold text-emerald-950 mb-1.5">
        <span>የቅርጫት ማጠቃለያ (${itemCount} እቃዎች)</span>
        <span class="text-sm font-extrabold text-emerald-700">${subtotal.toLocaleString()} ETB</span>
      </div>
      <p class="text-slate-600 truncate">
        ${entries.map(([id, qty]) => {
          const item = products.find(p => p.id === id);
          return item ? `${item.nameAm} (${qty})` : '';
        }).filter(Boolean).join(', ')}
      </p>
    </div>
  `;
}

// Validate Mandatory Fields
function validateCheckoutForm() {
  const nameInput = document.getElementById("checkout-name");
  const phoneInput = document.getElementById("checkout-phone");
  const blockInput = document.getElementById("checkout-block");
  const houseInput = document.getElementById("checkout-house");
  const noteInput = document.getElementById("checkout-note");
  const rememberCheckbox = document.getElementById("remember-customer");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const block = blockInput ? blockInput.value.trim() : "";
  const house = houseInput ? houseInput.value.trim() : "";
  const note = noteInput ? noteInput.value.trim() : "";

  // Reset errors
  document.querySelectorAll(".form-error").forEach(el => el.classList.add("hidden"));

  let isValid = true;

  if (!name || name.length < 2) {
    const err = document.getElementById("error-name");
    if (err) err.classList.remove("hidden");
    isValid = false;
  }

  // Ethiopian phone number validation (accepts 09..., 07..., +251...)
  const phoneRegex = /^(?:\+251|251|0)?([79]\d{8})$/;
  const cleanPhone = phone.replace(/[\s-]/g, "");
  if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
    const err = document.getElementById("error-phone");
    if (err) err.classList.remove("hidden");
    isValid = false;
  }

  if (!block) {
    const err = document.getElementById("error-block");
    if (err) err.classList.remove("hidden");
    isValid = false;
  }

  if (!house) {
    const err = document.getElementById("error-house");
    if (err) err.classList.remove("hidden");
    isValid = false;
  }

  if (!isValid) {
    showToast("እባክዎ የተጠየቁትን ሙሉ መረጃዎች በትክክል ይሙሉ!", "warning");
    return null;
  }

  const customerData = {
    name,
    phone: cleanPhone,
    block,
    house,
    note
  };

  if (rememberCheckbox && rememberCheckbox.checked) {
    localStorage.setItem(STORAGE_KEYS.CUSTOMER, JSON.stringify(customerData));
  }

  return customerData;
}

// Generate structured order text
function generateOrderData(customer) {
  const { itemCount, subtotal } = getCartTotals();
  const orderId = "SS-" + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const dateFormatted = now.toLocaleDateString('am-ET', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const itemsList = Object.entries(cart).map(([id, qty]) => {
    const item = products.find(p => p.id === id);
    if (!item || qty <= 0) return null;
    return {
      id: item.id,
      nameAm: item.nameAm,
      nameEn: item.nameEn,
      unit: item.unit,
      price: item.price,
      quantity: qty,
      subtotal: item.price * qty
    };
  }).filter(Boolean);

  const formattedText = 
`🛒 አዲስ ትዕዛዝ - ሳዳም ሱቅ (Saddam Shop)
━━━━━━━━━━━━━━━━━━
📋 የትዕዛዝ ቁጥር: #${orderId}
📅 ቀን: ${dateFormatted}
👤 የደንበኛ ስም: ${customer.name}
📞 ስልክ ቁጥር: ${customer.phone}
📍 አድራሻ: ብሎክ: ${customer.block} | የቤት ቁጥር: ${customer.house}
${customer.note ? `📝 ማስታወሻ: ${customer.note}\n` : ''}━━━━━━━━━━━━━━━━━━
🛍️ የታዘዙ እቃዎች:
${itemsList.map(item => `• ${item.nameAm} (${item.unit}) x ${item.quantity} = ${item.subtotal.toLocaleString()} ETB`).join("\n")}
━━━━━━━━━━━━━━━━━━
💵 ጠቅላላ ድምር: ${subtotal.toLocaleString()} ETB
🛵 አቅርቦት: የሰፈር ፈጣን አቅርቦት
📞 የሱቅ ስልክ: ${SHOP_PHONE}`;

  const orderRecord = {
    id: orderId,
    customer,
    items: itemsList,
    total: subtotal,
    itemCount,
    timestamp: new Date().toISOString(),
    status: "አዲስ / Pending",
    formattedText
  };

  // Save order to history
  saveOrderToHistory(orderRecord);
  lastPlacedOrder = orderRecord;

  return orderRecord;
}

function saveOrderToHistory(order) {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.ORDERS);
    const orders = saved ? JSON.parse(saved) : [];
    orders.unshift(order);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders.slice(0, 50)));
    renderOrdersHistory();
  } catch (e) {
    console.error("Error saving order:", e);
  }
}

// Checkout Execution Triggers
function handleCheckoutAction(actionType) {
  const customer = validateCheckoutForm();
  if (!customer) return;

  const order = generateOrderData(customer);

  switch (actionType) {
    case "call":
      // Direct call trigger to 0935911623
      showToast("ወደ ሳዳም ሱቅ በመደወል ላይ (0935911623)...", "info");
      window.location.href = `tel:${SHOP_PHONE}`;
      openReceiptModal(order);
      break;

    case "sms":
      // SMS text trigger
      const smsBody = encodeURIComponent(order.formattedText);
      showToast("በSMS መልዕክት ለመላክ በመዘጋጀት ላይ...", "info");
      window.location.href = `sms:${SHOP_PHONE}?body=${smsBody}`;
      openReceiptModal(order);
      break;

    case "telegram":
      // Telegram share trigger
      const tgText = encodeURIComponent(order.formattedText);
      const tgUrl = `https://t.me/share/url?url=${encodeURIComponent('https://sadamshop.et')}&text=${tgText}`;
      window.open(tgUrl, "_blank");
      openReceiptModal(order);
      break;

    case "whatsapp":
      const waText = encodeURIComponent(order.formattedText);
      const waUrl = `https://wa.me/251935911623?text=${waText}`;
      window.open(waUrl, "_blank");
      openReceiptModal(order);
      break;

    case "receipt":
    default:
      openReceiptModal(order);
      break;
  }
}

// Receipt Modal Handling
function openReceiptModal(order) {
  closeCheckoutModal();
  const modal = document.getElementById("receipt-modal");
  const content = document.getElementById("receipt-content");

  if (!modal || !content) return;

  content.innerHTML = `
    <div class="border-b border-dashed border-slate-300 pb-4 mb-4 text-center">
      <div class="inline-flex p-2.5 rounded-full bg-emerald-100 text-emerald-800 mb-2">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="text-xl font-black text-slate-900">ትዕዛዝዎ በተሳካ ሁኔታ ተመዝግቧል!</h3>
      <p class="text-xs text-slate-500 mt-1">ሳዳም ሱቅ (Saddam Shop) • የሰፈር ፈጣን አቅርቦት</p>
      <div class="mt-2 inline-block px-3 py-1 bg-slate-100 rounded-lg font-mono text-xs font-bold text-slate-700">
        ትዕዛዝ #${order.id}
      </div>
    </div>

    <!-- Customer & Delivery Details -->
    <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1.5 mb-4 font-medium">
      <div class="flex justify-between">
        <span class="text-slate-500">የደንበኛ ስም:</span>
        <span class="font-bold text-slate-800">${order.customer.name}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-slate-500">ስልክ ቁጥር:</span>
        <span class="font-bold text-slate-800">${order.customer.phone}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-slate-500">ብሎክ ቁጥር:</span>
        <span class="font-bold text-slate-800">${order.customer.block}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-slate-500">የቤት ቁጥር:</span>
        <span class="font-bold text-slate-800">${order.customer.house}</span>
      </div>
      ${order.customer.note ? `
        <div class="flex justify-between pt-1 border-t border-slate-200">
          <span class="text-slate-500">ማስታወሻ:</span>
          <span class="font-semibold text-emerald-800 text-right">${order.customer.note}</span>
        </div>
      ` : ''}
    </div>

    <!-- Itemized List -->
    <div class="mb-4">
      <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">የታዘዙ እቃዎች ዝርዝር</h4>
      <div class="divide-y divide-slate-100 max-h-48 overflow-y-auto">
        ${order.items.map(item => `
          <div class="py-2 flex items-center justify-between text-xs">
            <div>
              <span class="font-bold text-slate-800">${item.nameAm}</span>
              <span class="text-slate-400"> x ${item.quantity}</span>
              <p class="text-[11px] text-slate-500">${item.unit}</p>
            </div>
            <span class="font-extrabold text-slate-800">${item.subtotal.toLocaleString()} ETB</span>
          </div>
        `).join("")}
      </div>
      <div class="mt-3 pt-3 border-t-2 border-slate-200 flex justify-between items-center text-sm font-black text-emerald-900">
        <span>ጠቅላላ የሚከፈል ድምር</span>
        <span class="text-lg text-emerald-700">${order.total.toLocaleString()} ETB</span>
      </div>
    </div>

    <div class="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-amber-800 mb-4">
      💡 <strong>ጠቃሚ ማሳሰቢያ:</strong> ትዕዛዝዎ ፈጥኖ እንዲደርስዎት በቀጥታ በስልክ ወደ <strong>0935911623</strong> ይደውሉ ወይም በTelegram/SMS ይላኩ።
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");

  // Empty cart after successful placement
  cart = {};
  saveCart();
  renderCart();
  renderProducts();
}

function closeReceiptModal() {
  const modal = document.getElementById("receipt-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

function copyOrderReceipt() {
  if (!lastPlacedOrder) return;
  navigator.clipboard.writeText(lastPlacedOrder.formattedText).then(() => {
    showToast("የደረሰኝ ሙሉ ጽሑፍ ተገልብጧል (Copied)!", "success");
  }).catch(() => {
    showToast("ጽሑፉን መገልበጥ አልተቻለም", "error");
  });
}

function callShopNow() {
  window.location.href = `tel:${SHOP_PHONE}`;
}

// 8. Store Owner / Admin Dashboard
function checkAdminAuth() {
  isAdminLoggedIn = localStorage.getItem(STORAGE_KEYS.ADMIN) === "true";
  updateAdminUI();
}

function updateAdminUI() {
  const adminBadges = document.querySelectorAll(".admin-status-indicator");
  const adminPanelToggle = document.getElementById("admin-nav-button");

  adminBadges.forEach(badge => {
    if (isAdminLoggedIn) {
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  });

  if (adminPanelToggle) {
    if (isAdminLoggedIn) {
      adminPanelToggle.innerHTML = `
        <span class="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-300">
          <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          <span>ሳዳም (Admin)</span>
        </span>
      `;
    } else {
      adminPanelToggle.innerHTML = `
        <span class="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 px-3 py-1.5 rounded-full border border-slate-200 transition">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          <span>አስተዳዳሪ ግባ</span>
        </span>
      `;
    }
  }
}

function openAdminModal() {
  if (isAdminLoggedIn) {
    openAdminDashboard();
  } else {
    const modal = document.getElementById("admin-login-modal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
      const userField = document.getElementById("admin-username");
      if (userField) userField.focus();
    }
  }
}

function closeAdminLoginModal() {
  const modal = document.getElementById("admin-login-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    document.getElementById("admin-login-error")?.classList.add("hidden");
  }
}

function handleAdminLogin(event) {
  if (event) event.preventDefault();
  const user = document.getElementById("admin-username")?.value.trim();
  const pass = document.getElementById("admin-password")?.value.trim();
  const errorEl = document.getElementById("admin-login-error");

  // Credentials requested:
  // Username: sadam
  // Password: 2119
  if (user === "sadam" && pass === "2119") {
    isAdminLoggedIn = true;
    localStorage.setItem(STORAGE_KEYS.ADMIN, "true");
    closeAdminLoginModal();
    updateAdminUI();
    renderProducts();
    openAdminDashboard();
    showToast("እንኳን ደህና መጡ ሳዳም! ወደ አስተዳዳሪ ክፍል ገብተዋል።", "success");
  } else {
    if (errorEl) {
      errorEl.textContent = "የተሳሳተ የተጠቃሚ ስም ወይም የይለፍ ቃል! (Username or Password incorrect)";
      errorEl.classList.remove("hidden");
    }
  }
}

function handleAdminLogout() {
  if (confirm("ከአስተዳዳሪ ክፍል መውጣት ይፈልጋሉ?")) {
    isAdminLoggedIn = false;
    localStorage.removeItem(STORAGE_KEYS.ADMIN);
    closeAdminDashboard();
    updateAdminUI();
    renderProducts();
    showToast("ከአስተዳዳሪ ክፍል ወጥተዋል", "info");
  }
}

function openAdminDashboard() {
  const modal = document.getElementById("admin-dashboard-modal");
  if (!modal) return;
  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  switchAdminTab("products");
  renderAdminProductsList();
}

function closeAdminDashboard() {
  const modal = document.getElementById("admin-dashboard-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

function switchAdminTab(tab) {
  const tabs = ["products", "add", "orders", "settings"];
  tabs.forEach(t => {
    const tabBtn = document.getElementById(`tab-btn-${t}`);
    const tabContent = document.getElementById(`tab-content-${t}`);
    if (t === tab) {
      if (tabBtn) {
        tabBtn.className = "px-4 py-2 font-bold text-xs md:text-sm border-b-2 border-emerald-600 text-emerald-700 flex items-center gap-1.5";
      }
      if (tabContent) tabContent.classList.remove("hidden");
    } else {
      if (tabBtn) {
        tabBtn.className = "px-4 py-2 font-medium text-xs md:text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1.5";
      }
      if (tabContent) tabContent.classList.add("hidden");
    }
  });

  if (tab === "products") renderAdminProductsList();
  if (tab === "orders") renderOrdersHistory();
}

function renderAdminProductsList() {
  const container = document.getElementById("admin-products-table");
  if (!container) return;

  container.innerHTML = products.map((p, idx) => {
    return `
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 transition gap-3">
        <div class="flex items-center gap-3">
          <img src="${p.image}" class="w-12 h-12 rounded-lg object-cover border border-slate-200" alt="${p.nameAm}"/>
          <div>
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-sm text-slate-900">${p.nameAm}</h4>
              <span class="text-xs text-slate-500">(${p.nameEn})</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
              <span class="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-semibold">${getCategoryLabel(p.category)}</span>
              <span>• ${p.unit}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between w-full sm:w-auto gap-4 self-end sm:self-center">
          <!-- Price editing -->
          <div class="flex items-center gap-1.5">
            <span class="text-xs text-slate-400 font-medium">ዋጋ:</span>
            <input 
              type="number" 
              value="${p.price}" 
              id="admin-price-${p.id}"
              class="w-20 px-2 py-1 text-sm font-bold border border-slate-300 rounded-lg text-emerald-800 text-right focus:border-emerald-600 focus:outline-none"
            />
            <span class="text-xs font-bold text-emerald-700">ETB</span>
            <button 
              onclick="saveInlinePrice('${p.id}')"
              class="p-1 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition"
              title="ዋጋ መዝግብ / Save Price"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
          </div>

          <!-- Stock toggle -->
          <button 
            onclick="toggleProductStock('${p.id}')"
            class="px-2.5 py-1 rounded-lg text-xs font-bold transition ${p.inStock ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' : 'bg-rose-100 text-rose-800 hover:bg-rose-200'}"
            title="የእቃውን መኖር/ማለቅ ቀይር"
          >
            ${p.inStock ? 'አለ (In Stock)' : 'አልቋል (Out)'}
          </button>

          <!-- Edit & Delete -->
          <div class="flex items-center gap-1">
            <button 
              onclick="openEditProductModal('${p.id}')"
              class="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition"
              title="ሁሉንም አርትዕ"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
            </button>
            <button 
              onclick="deleteProduct('${p.id}')"
              class="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition"
              title="እቃውን ሰርዝ"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function saveInlinePrice(id) {
  const input = document.getElementById(`admin-price-${id}`);
  if (!input) return;
  const newPrice = parseFloat(input.value);
  if (isNaN(newPrice) || newPrice < 0) {
    showToast("እባክዎ ትክክለኛ ዋጋ ያስገቡ", "warning");
    return;
  }

  const p = products.find(item => item.id === id);
  if (p) {
    p.price = newPrice;
    saveProducts();
    renderProducts();
    renderCart();
    showToast(`የ ${p.nameAm} ዋጋ ወደ ${newPrice} ETB ተቀይሯል!`, "success");
  }
}

function toggleProductStock(id) {
  const p = products.find(item => item.id === id);
  if (p) {
    p.inStock = !p.inStock;
    saveProducts();
    renderProducts();
    renderAdminProductsList();
    showToast(`${p.nameAm}: ${p.inStock ? 'ወደ "አለ" ተቀይሯል' : 'ወደ "አልቋል" ተቀይሯል'}`, "info");
  }
}

function deleteProduct(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;

  if (confirm(`እርግጠኛ ነዎት "${p.nameAm}" ከሱቅ ዝርዝር ውስጥ እንዲሰረዝ ይፈልጋሉ?`)) {
    products = products.filter(item => item.id !== id);
    delete cart[id];
    saveProducts();
    saveCart();
    renderProducts();
    renderCart();
    renderAdminProductsList();
    showToast(`"${p.nameAm}" ተሰርዟል!`, "info");
  }
}

// Add New Product Handler
function handleAddProduct(event) {
  if (event) event.preventDefault();

  const nameAm = document.getElementById("new-prod-name-am")?.value.trim();
  const nameEn = document.getElementById("new-prod-name-en")?.value.trim();
  const price = parseFloat(document.getElementById("new-prod-price")?.value);
  const category = document.getElementById("new-prod-category")?.value;
  const unit = document.getElementById("new-prod-unit")?.value.trim();
  let image = document.getElementById("new-prod-image")?.value.trim();
  const description = document.getElementById("new-prod-desc")?.value.trim() || "";

  if (!nameAm || isNaN(price) || price <= 0 || !unit) {
    showToast("እባክዎ የስም፣ የዋጋ እና የመጠን መስኮችን በትክክል ይሙሉ!", "warning");
    return;
  }

  if (!image) {
    image = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80";
  }

  const newProduct = {
    id: "prod-" + Date.now(),
    nameAm,
    nameEn: nameEn || nameAm,
    price,
    category: category || "groceries",
    unit,
    image,
    inStock: true,
    description
  };

  products.unshift(newProduct);
  saveProducts();
  renderProducts();
  renderAdminProductsList();

  // Reset form
  document.getElementById("add-product-form")?.reset();
  switchAdminTab("products");
  showToast(`አዲሱ እቃ "${nameAm}" በተሳካ ሁኔታ ተጨምሯል!`, "success");
}

// Edit Existing Product Modal
function openEditProductModal(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;
  editingProductId = id;

  document.getElementById("edit-prod-id").value = p.id;
  document.getElementById("edit-prod-name-am").value = p.nameAm;
  document.getElementById("edit-prod-name-en").value = p.nameEn;
  document.getElementById("edit-prod-price").value = p.price;
  document.getElementById("edit-prod-category").value = p.category;
  document.getElementById("edit-prod-unit").value = p.unit;
  document.getElementById("edit-prod-image").value = p.image;
  document.getElementById("edit-prod-desc").value = p.description || "";
  document.getElementById("edit-prod-stock").checked = p.inStock;

  const modal = document.getElementById("edit-product-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeEditProductModal() {
  const modal = document.getElementById("edit-product-modal");
  if (modal) modal.classList.add("hidden");
  editingProductId = null;
}

function handleSaveEditProduct(event) {
  if (event) event.preventDefault();
  if (!editingProductId) return;

  const p = products.find(item => item.id === editingProductId);
  if (!p) return;

  p.nameAm = document.getElementById("edit-prod-name-am").value.trim();
  p.nameEn = document.getElementById("edit-prod-name-en").value.trim();
  p.price = parseFloat(document.getElementById("edit-prod-price").value);
  p.category = document.getElementById("edit-prod-category").value;
  p.unit = document.getElementById("edit-prod-unit").value.trim();
  p.image = document.getElementById("edit-prod-image").value.trim() || p.image;
  p.description = document.getElementById("edit-prod-desc").value.trim();
  p.inStock = document.getElementById("edit-prod-stock").checked;

  saveProducts();
  renderProducts();
  renderCart();
  renderAdminProductsList();
  closeEditProductModal();
  showToast(`"${p.nameAm}" በተሳካ ሁኔታ ተሻሽሏል!`, "success");
}

// Reset Catalog to Default 15 Items
function resetCatalogToDefault() {
  if (confirm("የእቃዎች ዝርዝርን ወደ ቀደመው ኦሪጅናል 15 እቃዎች መመለስ ይፈልጋሉ? (ይህ እርምጃ ያከሏቸውን አዳዲስ እቃዎች ያጠፋል)")) {
    products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    saveProducts();
    renderProducts();
    renderAdminProductsList();
    showToast("የእቃዎች ካታሎግ ወደ ቀደመው 15 እቃዎች ተመልሷል!", "success");
  }
}

// Export / Backup
function exportCatalogBackup() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `sadam_shop_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("የካታሎግ ኮፒ ተወስዷል (Downloaded)!", "success");
}

// Render Orders History Log
function renderOrdersHistory() {
  const container = document.getElementById("admin-orders-list");
  if (!container) return;

  try {
    const saved = localStorage.getItem(STORAGE_KEYS.ORDERS);
    const orders = saved ? JSON.parse(saved) : [];

    if (orders.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8 text-slate-400">
          <svg class="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
          <p class="text-xs">እስካሁን የተመዘገበ አዲስ ትዕዛዝ የለም</p>
        </div>
      `;
      return;
    }

    container.innerHTML = orders.map(ord => {
      const date = new Date(ord.timestamp).toLocaleString('am-ET');
      return `
        <div class="p-3.5 bg-white border border-slate-200 rounded-xl space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="font-mono font-bold text-emerald-800">#${ord.id}</span>
            <span class="text-slate-400 text-[11px]">${date}</span>
          </div>
          <div class="text-xs text-slate-700">
            <strong>${ord.customer.name}</strong> • <a href="tel:${ord.customer.phone}" class="text-emerald-700 font-semibold underline">${ord.customer.phone}</a>
            <p class="text-slate-500 mt-0.5">ብሎክ: ${ord.customer.block} | ቤት ቁጥር: ${ord.customer.house} ${ord.customer.note ? `| ማስታወሻ: ${ord.customer.note}` : ''}</p>
          </div>
          <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="text-slate-600">${ord.items.length} እቃዎች</span>
            <span class="font-extrabold text-emerald-700">${ord.total.toLocaleString()} ETB</span>
          </div>
        </div>
      `;
    }).join("");
  } catch (e) {
    console.error("Error rendering orders:", e);
  }
}

// 9. Drawer & Modal Toggles
function toggleCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer || !overlay) return;

  const isHidden = drawer.classList.contains("translate-x-full");
  if (isHidden) {
    openCartDrawer();
  } else {
    closeCartDrawer();
  }
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer || !overlay) return;

  overlay.classList.remove("hidden");
  setTimeout(() => overlay.classList.remove("opacity-0"), 10);
  drawer.classList.remove("translate-x-full");
  document.body.classList.add("overflow-hidden");
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer || !overlay) return;

  drawer.classList.add("translate-x-full");
  overlay.classList.add("opacity-0");
  setTimeout(() => {
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 250);
}

// 10. Toast Notification System
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const colors = {
    success: "bg-emerald-800 text-white border-emerald-600",
    warning: "bg-amber-600 text-white border-amber-500",
    error: "bg-rose-700 text-white border-rose-600",
    info: "bg-slate-800 text-white border-slate-700"
  };

  const icons = {
    success: '<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>',
    warning: '<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>',
    error: '<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>',
    info: '<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  };

  toast.className = `flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl border text-xs md:text-sm font-semibold transform transition-all duration-300 translate-y-3 opacity-0 ${colors[type] || colors.info}`;
  toast.innerHTML = `
    ${icons[type] || icons.info}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-3", "opacity-0");
  });

  // Auto remove after 3.2s
  setTimeout(() => {
    toast.classList.add("opacity-0", "-translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// 11. Event Listeners Setup
function setupEventListeners() {
  // Real-time search
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        if (searchQuery.length > 0) {
          clearSearchBtn.classList.remove("hidden");
        } else {
          clearSearchBtn.classList.add("hidden");
        }
      }
      renderProducts();
    });

    // Keyboard shortcut '/' to search
    window.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== searchInput && !e.target.matches("input, textarea")) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearSearchBtn.classList.add("hidden");
      renderProducts();
      searchInput.focus();
    });
  }

  // Category filter buttons
  const catButtons = document.querySelectorAll(".category-pill");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      setCategory(cat);
    });
  });

  // Admin login form
  const adminLoginForm = document.getElementById("admin-login-form");
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", handleAdminLogin);
  }

  // Add product form
  const addProductForm = document.getElementById("add-product-form");
  if (addProductForm) {
    addProductForm.addEventListener("submit", handleAddProduct);
  }

  // Edit product form
  const editProductForm = document.getElementById("edit-product-form");
  if (editProductForm) {
    editProductForm.addEventListener("submit", handleSaveEditProduct);
  }

  // Quick preset image selector for adding products
  const presetSelectors = document.querySelectorAll(".preset-img-btn");
  presetSelectors.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = btn.getAttribute("data-url");
      const targetInput = document.getElementById("new-prod-image");
      if (targetInput && url) {
        targetInput.value = url;
        showToast("የምስል ሊንክ ተመርጧል", "info");
      }
    });
  });

  // Escape key closes modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      closeCheckoutModal();
      closeReceiptModal();
      closeAdminLoginModal();
      closeAdminDashboard();
      closeEditProductModal();
    }
  });
}
