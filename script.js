
        // Sample car data with real car images
        const cars = [
            {
                id: 1,
                name: "Tesla Model S",
                category: "luxury",
                price: 299,
                fuel: "electric",
                seats: 5,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Autopilot", "Premium Audio", "Glass Roof", "Supercharging"],
                available: true,
                rating: 4.9
            },
            {
                id: 2,
                name: "BMW X5",
                category: "suv",
                price: 199,
                fuel: "gasoline",
                seats: 7,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["4WD", "Leather Seats", "Navigation", "Heated Seats"],
                available: true,
                rating: 4.8
            },
            {
                id: 3,
                name: "Mercedes-Benz C-Class",
                category: "luxury",
                price: 249,
                fuel: "gasoline",
                seats: 5,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Premium Interior", "Advanced Safety", "Wireless Charging", "Ambient Lighting"],
                available: true,
                rating: 4.9
            },
            {
                id: 4,
                name: "Audi A4",
                category: "luxury",
                price: 189,
                fuel: "gasoline",
                seats: 5,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen Audio", "Matrix LED"],
                available: true,
                rating: 4.7
            },
            {
                id: 5,
                name: "Porsche 911",
                category: "sports",
                price: 599,
                fuel: "gasoline",
                seats: 4,
                transmission: "Manual",
                image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Sport Chrono", "PASM", "Sport Exhaust", "Carbon Fiber"],
                available: true,
                rating: 5.0
            },
            {
                id: 6,
                name: "Toyota Camry",
                category: "economy",
                price: 79,
                fuel: "hybrid",
                seats: 5,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Hybrid Engine", "Safety Sense", "Apple CarPlay", "LED Headlights"],
                available: true,
                rating: 4.5
            },
            {
                id: 7,
                name: "Range Rover Evoque",
                category: "suv",
                price: 279,
                fuel: "gasoline",
                seats: 5,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1606016159991-8b5d2f87a5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Terrain Response", "Panoramic Roof", "Meridian Audio", "ClearSight"],
                available: true,
                rating: 4.8
            },
            
              {
    id: 8,
    name: "Maruti Suzuki Swift",
    category: "economy",
    price: 59,
    fuel: "gasoline",
    seats: 5,
    transmission: "Manual",
    image: "https://unsplash.com/photos/a-car-parked-on-the-side-of-the-road-97ZU4Umo3WU",
    features: ["Fuel Efficient", "Compact Size", "Affordable", "Easy Handling"],
    available: true,
    rating: 4.4
}

                
            
        ];

        let bookings = [];
        let selectedCar = null;

        // Navigation functions
        function showSection(sectionName) {
            document.querySelectorAll('.section-content').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionName).classList.remove('hidden');
            
            // Close mobile menu
            document.getElementById('mobileMenu').classList.add('hidden');
            
            if (sectionName === 'cars') {
                displayCars(cars);
            } else if (sectionName === 'bookings') {
                displayBookings();
            }
        }

        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('hidden');
        }

        // Search functionality
        function searchCars() {
            const pickupDate = document.getElementById('pickupDate').value;
            const returnDate = document.getElementById('returnDate').value;
            
            if (!pickupDate || !returnDate) {
                alert('Please select both pickup and return dates');
                return;
            }
            
            if (new Date(pickupDate) >= new Date(returnDate)) {
                alert('Return date must be after pickup date');
                return;
            }
            
            showSection('cars');
            displayCars(cars);
        }

        // Display cars with enhanced styling
        function displayCars(carsToShow) {
            const carGrid = document.getElementById('carGrid');
            carGrid.innerHTML = '';

            carsToShow.forEach((car, index) => {
                const carCard = document.createElement('div');
                carCard.className = 'bg-white rounded-2xl shadow-xl overflow-hidden car-card fade-in';
                carCard.style.animationDelay = `${index * 0.1}s`;
                
                carCard.innerHTML = `
                    <div class="relative overflow-hidden">
                        <img src="${car.image}" alt="${car.name}" 
                             class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                             onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';">
                        <div class="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
                            <div class="flex items-center space-x-1">
                                <i class="fas fa-star text-yellow-400"></i>
                                <span class="text-sm font-semibold">${car.rating}</span>
                            </div>
                        </div>
                        <div class="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                            ${car.category}
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3 text-gray-800">${car.name}</h3>
                        <div class="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-users text-purple-600"></i>
                                <span>${car.seats} seats</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-cog text-purple-600"></i>
                                <span>${car.transmission}</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-gas-pump text-purple-600"></i>
                                <span class="capitalize">${car.fuel}</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-shield-alt text-purple-600"></i>
                                <span>Insured</span>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex flex-wrap gap-2">
                                ${car.features.slice(0, 3).map(feature => 
                                    `<span class="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">${feature}</span>`
                                ).join('')}
                                ${car.features.length > 3 ? `<span class="text-xs text-gray-500 px-2 py-1">+${car.features.length - 3} more</span>` : ''}
                            </div>
                        </div>
                        <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                            <div>
                                <span class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">$${car.price}</span>
                                <span class="text-gray-500 text-lg">/day</span>
                            </div>
                            <button onclick= "openRegistrationModal()" 
                            class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold transform hover:scale-105 ${!car.available ? 'opacity-50 cursor-not-allowed' : ''}"
                                ${!car.available ? 'disabled' : ''}>
                                <i class="fas fa-calendar-check mr-2"></i>
                                ${car.available ? 'Book Now' : 'Unavailable'}
                            </button>

                        </div>
                    </div>
                `;
                carGrid.appendChild(carCard);
            });
        }

        // Filter functionality
        function applyFilters() {
            const categoryFilter = document.getElementById('categoryFilter').value;
            const priceFilter = document.getElementById('priceFilter').value;
            const fuelFilter = document.getElementById('fuelFilter').value;

            let filteredCars = cars.filter(car => {
                let matches = true;
                
                if (categoryFilter && car.category !== categoryFilter) matches = false;
                if (fuelFilter && car.fuel !== fuelFilter) matches = false;
                
                if (priceFilter) {
                    switch(priceFilter) {
                        case 'low':
                            if (car.price >= 100) matches = false;
                            break;
                        case 'medium':
                            if (car.price < 100 || car.price > 300) matches = false;
                            break;
                        case 'high':
                            if (car.price <= 300) matches = false;
                            break;
                    }
                }
                
                return matches;
            });

            displayCars(filteredCars);
        }

        // Booking modal functions
        function openBookingModal(carId) {
            selectedCar = cars.find(car => car.id === carId);
            const modal = document.getElementById('bookingModal');
            const carInfo = document.getElementById('selectedCarInfo');
            
            carInfo.innerHTML = `
                <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
                    <div class="flex items-center space-x-4">
                        <img src="${selectedCar.image}" alt="${selectedCar.name}" 
                             class="w-20 h-20 object-cover rounded-xl"
                             onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';">
                        <div>
                            <h4 class="text-xl font-bold text-gray-800">${selectedCar.name}</h4>
                            <p class="text-purple-600 font-semibold">$${selectedCar.price}/day • ${selectedCar.seats} seats</p>
                            <div class="flex items-center space-x-1 mt-1">
                                <i class="fas fa-star text-yellow-400"></i>
                                <span class="text-sm text-gray-600">${selectedCar.rating} rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Set default dates from search form
            const pickupDate = document.getElementById('pickupDate').value;
            const returnDate = document.getElementById('returnDate').value;
            
            if (pickupDate) document.getElementById('bookingPickupDate').value = pickupDate;
            if (returnDate) document.getElementById('bookingReturnDate').value = returnDate;
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeBookingModal() {
            const modal = document.getElementById('bookingModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.getElementById('bookingForm').reset();
        }

        // Handle booking form submission
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const pickupDate = document.getElementById('bookingPickupDate').value;
            const returnDate = document.getElementById('bookingReturnDate').value;
            
            const booking = {
                id: Date.now(),
                carId: selectedCar.id,
                carName: selectedCar.name,
                carImage: selectedCar.image,
                customerName: document.getElementById('customerName').value,
                customerEmail: document.getElementById('customerEmail').value,
                customerPhone: document.getElementById('customerPhone').value,
                pickupDate: pickupDate,
                returnDate: returnDate,
                totalPrice: calculateTotalPrice(selectedCar.price, pickupDate, returnDate),
                dailyRate: selectedCar.price,
                status: 'Confirmed',
                bookingDate: new Date().toLocaleDateString()
            };
            
            bookings.push(booking);
            closeBookingModal();
            
            // Show success message
            alert('🎉 Booking confirmed! Your dream car is reserved. Check your bookings to see details.');
            showSection('bookings');
        });

        function calculateTotalPrice(dailyRate, pickupDate, returnDate) {
            const pickup = new Date(pickupDate);
            const returnD = new Date(returnDate);
            const days = Math.ceil((returnD - pickup) / (1000 * 60 * 60 * 24));
            return dailyRate * days;
        }

        // Display bookings with enhanced styling
        function displayBookings() {
            const bookingsList = document.getElementById('bookingsList');
            
            if (bookings.length === 0) {
                bookingsList.innerHTML = `
                    <div class="bg-white rounded-2xl shadow-xl p-12 text-center">
                        <div class="mb-6">
                            <i class="fas fa-calendar-times text-6xl text-gray-300"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-4">No Bookings Yet</h3>
                        <p class="text-gray-600 mb-8">Start your journey by exploring our premium fleet!</p>
                        <button onclick="showSection('cars')" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold transform hover:scale-105">
                            <i class="fas fa-car mr-2"></i>Browse Our Fleet
                        </button>
                    </div>
                `;
                return;
            }
            
            bookingsList.innerHTML = bookings.map((booking, index) => `
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden fade-in" style="animation-delay: ${index * 0.1}s;">
                    <div class="md:flex">
                        <div class="md:w-1/3">
                            <img src="${booking.carImage}" alt="${booking.carName}" 
                                 class="w-full h-48 md:h-full object-cover"
                                 onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';">
                        </div>
                        <div class="md:w-2/3 p-8">
                            <div class="flex justify-between items-start mb-6">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-800 mb-2">${booking.carName}</h3>
                                    <p class="text-gray-600">Booking #${booking.id}</p>
                                </div>
                                <span class="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    <i class="fas fa-check-circle mr-1"></i>${booking.status}
                                </span>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div class="space-y-3">
                                    <h4 class="font-semibold text-gray-800 flex items-center">
                                        <i class="fas fa-user mr-2 text-purple-600"></i>Customer Details
                                    </h4>
                                    <div class="text-gray-600 space-y-1">
                                        <p class="font-medium">${booking.customerName}</p>
                                        <p class="text-sm">${booking.customerEmail}</p>
                                        <p class="text-sm">${booking.customerPhone}</p>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <h4 class="font-semibold text-gray-800 flex items-center">
                                        <i class="fas fa-calendar-alt mr-2 text-purple-600"></i>Rental Period
                                    </h4>
                                    <div class="text-gray-600 space-y-1">
                                        <p><span class="font-medium">Pickup:</span> ${booking.pickupDate}</p>
                                        <p><span class="font-medium">Return:</span> ${booking.returnDate}</p>
                                        <p class="text-sm">Booked on ${booking.bookingDate}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-gray-200">
                                <div class="mb-4 sm:mb-0">
                                    <div class="text-sm text-gray-600 mb-1">Total Amount</div>
                                    <span class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">$${booking.totalPrice}</span>
                                    <span class="text-gray-500 ml-2">($${booking.dailyRate}/day)</span>
                                </div>
                                <button onclick="cancelBooking(${booking.id})" class="bg-gradient-to-r from-red-400 to-red-600 text-white py-3 px-6 rounded-xl hover:from-red-500 hover:to-red-700 transition-all duration-300 font-semibold transform hover:scale-105">
                                    <i class="fas fa-times mr-2"></i>Cancel Booking
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function cancelBooking(bookingId) {
            if (confirm('Are you sure you want to cancel this booking? This action cannot be undone.')) {
                const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);
                if (bookingIndex !== -1) {
                    const booking = bookings[bookingIndex];
                    
                    // Make car available again
                    const carIndex = cars.findIndex(car => car.id === booking.carId);
                    if (carIndex !== -1) {
                        cars[carIndex].available = true;
                    }
                    
                    bookings.splice(bookingIndex, 1);
                    displayBookings();
                    alert('✅ Booking cancelled successfully. We hope to serve you again soon!');
                }
            }
        }

        // Set default dates
        function setDefaultDates() {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            document.getElementById('pickupDate').value = today.toISOString().split('T')[0];
            document.getElementById('returnDate').value = tomorrow.toISOString().split('T')[0];
        }

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('bg-white', 'shadow-lg');
                navbar.classList.remove('glass-effect');
                // Change text colors for better contrast on white background
                navbar.querySelectorAll('.nav-btn').forEach(btn => {
                    btn.classList.remove('text-white', 'hover:text-purple-300');
                    btn.classList.add('text-gray-700', 'hover:text-purple-600');
                });
                navbar.querySelector('.gradient-text').classList.remove('gradient-text');
                navbar.querySelector('h1').classList.add('text-gray-800');
            } else {
                navbar.classList.remove('bg-white', 'shadow-lg');
                navbar.classList.add('glass-effect');
                // Restore original colors
                navbar.querySelectorAll('.nav-btn').forEach(btn => {
                    btn.classList.add('text-white', 'hover:text-purple-300');
                    btn.classList.remove('text-gray-700', 'hover:text-purple-600');
                });
                navbar.querySelector('h1').classList.remove('text-gray-800');
                navbar.querySelector('h1').classList.add('gradient-text');
            }
        });

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            setDefaultDates();
            displayCars(cars);
            
            // Add smooth scrolling
            document.documentElement.style.scrollBehavior = 'smooth';
        });

        // Close modal when clicking outside
        document.getElementById('bookingModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeBookingModal();
            }
        });

        // Registration modal functions
function openRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.getElementById('registrationForm').reset();
}

// Handle registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    // (Later you can connect this with backend/local storage)
    alert(`🎉 Registration successful!\nWelcome, ${name}`);

    closeRegistrationModal();
});

    


