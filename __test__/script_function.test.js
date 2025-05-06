import {
  cart,
  addToCartFn,
  deleteFromCartFn,
  fetchProductsFn,
  removeByCartIdFn,
  calculateTotalFn,
  increaseProductCounterFn,
  addToWishListFn,
  removeByWishListIdFn,
  removeByProductIdWishlistFn,
  users,
  registerPeople,
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  loginUser,
} from "../js/script_function.js";


//login
// Mock localStorage
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = String(value);
  },
  removeItem(key) {
    delete this.store[key];
  },
  clear() {
    this.store = {};
  }
};

beforeEach(() => {
  localStorage.clear();
});

describe('loginUser', () => {
  test('should log in successfully with correct credentials', () => {
    const testUser = { email: 'tshabi@gmail.com', password: 'password123' };
    localStorage.setItem('users', JSON.stringify([testUser]));

    const loggedInUser = loginUser('tshabi@gmail.com', 'password123');
    expect(loggedInUser).toEqual(testUser);
  });

  test('should throw error if email is incorrect', () => {
    const testUser = { email: 'tshabi@gmail.com', password: 'password123' };
    localStorage.setItem('users', JSON.stringify([testUser]));

    expect(() => {
      loginUser('wrong@example.com', 'password123');
    }).toThrow('Email not found.');
  });

  test('should throw error if password is incorrect', () => {
    const testUser = { email: 'tshabi@gmail.com', password: 'password123' };
    localStorage.setItem('users', JSON.stringify([testUser]));

    expect(() => {
      loginUser('tshabi@gmail.com', 'wrongpassword');
    }).toThrow('');
  });


  test('should throw if email is empty', () => {
    expect(() => loginUser('')).toThrow('Invalid email');
  });

  test('should throw if email is only spaces', () => {
    expect(() => loginUser('   ')).toThrow('Invalid email');
  });

  test('should throw error if no user is registered', () => {
    expect(() => {
      loginUser('tshabi@gmail.com', 'password123');
    }).toThrow('No users registered.');
  });
});



//Sign Up Tests

beforeEach(() => {
  users.length = 0;
});


// [users]
describe('[users]', () => {
  test('should be defined', () => {
    expect(users).toBeDefined();
  });

  test('should be an array', () => {
    expect(Array.isArray(users)).toBe(true);
  });
});


// [Name]
describe('[validateName]', () => {
  test('should be a function', () => {
    expect(typeof validateName).toBe('function');
  });

  test('should throw if name is empty', () => {
    expect(() => validateName('')).toThrow('Invalid name');
  });

  test('should throw if name is only spaces', () => {
    expect(() => validateName('   ')).toThrow('Invalid name');
  });

  test('should throw if name is not a string', () => {
    expect(() => validateName(123)).toThrow('Invalid name');
  });

  test('should throw if name contains special characters', () => {
    expect(() => validateName('John@123')).toThrow('Invalid name');
  });
});


// [Email]
describe('[validateEmail]', () => {
  test('should be a function', () => {
    expect(typeof validateEmail).toBe('function');
  });

  test('should throw if email is empty', () => {
    expect(() => validateEmail('')).toThrow('Invalid email');
  });

  test('should throw if email is not a string', () => {
    expect(() => validateEmail(123)).toThrow('Invalid email');
  });

  test('should throw if email does not contain "@"', () => {
    expect(() => validateEmail('aliceexample.com')).toThrow('Invalid email');
  });
});


// [Password]
describe('[validatePassword]', () => {
  test('should be a function', () => {
    expect(typeof validatePassword).toBe('function');
  });

  test('should throw if password is empty', () => {
    expect(() => validatePassword('')).toThrow('');
  });

  test('should throw if password is too short', () => {
    expect(() => validatePassword('123')).toThrow('');
  });

  test('should throw if password is not a string', () => {
    expect(() => validatePassword(123456)).toThrow('Invalid password');
  });
});


// [ConfirmPassword]
describe('[validateConfirmPassword]', () => {
  test('should be a function', () => {
    expect(typeof validateConfirmPassword).toBe('function');
  });

  test('should throw if confirm password is empty', () => {
    expect(() => validateConfirmPassword('pass123', '')).toThrow('Password confirmation required');
  });

  test('should throw if passwords do not match', () => {
    expect(() => validateConfirmPassword('pass123', 'diff123')).toThrow('Passwords do not match');
  });
});


//login


//fetch Tests

describe("[fetchProductsFn]", () => {
  test("should be a valid function", async () => {
    expect(fetchProductsFn).toBeDefined();
    expect(typeof fetchProductsFn).toBe("function");

    const data = await fetchProductsFn();

    expect(data.length).toBe(30);
  });
});

//cart Test
describe("[cart]", () => {
  test("Should be defined", () => {
    expect(cart).toBeDefined();
  });

  test("Should be an array", () => {
    expect(Array.isArray(cart)).toBe(true);
  });

  test("Should be a valid array", () => {
    expect(typeof cart).toBe("object");
  });
});

//CartIdTests
// describe("[cartId]", () => {
//   test("Should be defined", () => {
//     expect(cartId).toBeDefined();
//   });

//   test("Should only be positive number only", () => {
//     let cartId = 1;
//     expect(cartId).toBeGreaterThan(0);

//   });

//   test("cartId should be a number", () => {
//     let cartId = 1;
//     expect(typeof cartId).toBe("number");
//   });

//   test("cartId should be a number, not a string", () => {
//     let cartId = 1;
//     expect(typeof cartId).toBe("number");
//   });
// });

//Add to cart Function Tests
describe("[addToCartFn]", () => {
  test("Should be defined", () => {
    expect(addToCartFn).toBeDefined();
  });

  test("Should be a valid function", () => {
    expect(typeof addToCartFn).toBe("function");
  });

  test("given an invalid productId, it should throw an error", () => {
    const productId = -1;
    expect(() => addToCartFn(productId)).toThrow();
  });

  test("productId should be a number", () => {
    const productId = "";
    expect(() => addToCartFn(productId)).toThrow();
  });

  test("Should add an element into a cart", () => {
    const productId = 1;

    addToCartFn(productId);
  });
});

//Deleting from cart
describe("[deleteFromCartFn]", () => {
  test("Should be defined", () => {
    expect(deleteFromCartFn).toBeDefined();
  });

  test("Should be a valid function", () => {
    expect(typeof deleteFromCartFn).toBe("function");
  });

  test("given an invalid productCartId, it should throw an error", () => {
    const productCartId = -1;
    expect(() => deleteFromCartFn(productCartId)).toThrow();
  });

  test("productCartId should be a number", () => {
    const productCartId = "";
    expect(() => deleteFromCartFn(productCartId)).toThrow();
  });

  test("Should delete an element from the cart", () => {
    const productCartId = 1;

    deleteFromCartFn(productCartId);
  });
});

//remove by cart Id

describe("[removeByCartIdFn]", () => {
  test("Should be defined", () => {
    expect(removeByCartIdFn).toBeDefined();
  });

  test("Should be a valid function", () => {
    expect(typeof removeByCartIdFn).toBe("function");
  });

  test("cart_id should be a number", () => {
    let cart_id = "";

    expect(() => removeByCartIdFn(cart_id)).toThrow();
  });

  test("given an invalid cart_id, it should throw an error", () => {
    const cart_id = -1;
    expect(() => removeByCartIdFn(cart_id)).toThrow();
  });

  test("Should delete an element from the cart using cart_id", () => {
    const cart_id = 1;

    removeByCartIdFn(cart_id);
  });
});

//Calculating Total Function
describe("[calculateTotalFn]", () => {
  test("Should be defined", () => {
    expect(calculateTotalFn).toBeDefined();
  });

  test("Should be a valid function", () => {
    expect(typeof calculateTotalFn).toBe("function");
  });

  test("cartProduct Should be an object", () => {
    const cartProduct = 1;
    expect(() => calculateTotalFn(cartProduct, 1)).toThrow();
  });
  test("productCount should be a positive number", () => {
    const productCount = -1;
    const cartProduct = {};
    expect(() => calculateTotalFn(cartProduct, productCount)).toThrow();
  });

  test("Should delete an element from the cart using cart_id", () => {
    const cart_id = 1;

    removeByCartIdFn(cart_id);
  });
});

//Increasing the count function
describe("[increaseProductCounterFn]", () => {
  test("Should be defined", () => {
    expect(increaseProductCounterFn).toBeDefined();
  });

  test("Should be a valid function", () => {
    expect(typeof increaseProductCounterFn).toBe("function");
  });

  test("given an invalid productCartId, it should throw an error", () => {
    const productCartId = -1;
    expect(() => increaseProductCounterFn(productCartId)).toThrow();
  });

  test("productId should be a number", () => {
    const productCartId = "";
    expect(() => increaseProductCounterFn(productCartId)).toThrow();
  });
});


//adding to wishlist
describe("[addToWishListFn]", () => {
  test("Should be defined", () => {
    expect(addToWishListFn).toBeDefined();
  });

  test("Should be a valid function", () => {
    expect(typeof addToWishListFn).toBe("function");
  });

  test("productId should be a valid parameter", () => {
    const productId = "";
    expect(() => addToWishListFn(productId)).toThrow("Invalid productId");
  });

  test("productId should be a positive number", () => {
    const productId = -1;
    expect(() => addToWishListFn(productId)).toThrow("Invalid productId");
  });

  test("should add to wishlist", () => {
    const productId = 1;
    addToWishListFn(productId);
  });
});

//removeByWishListIdFn test
describe("[removeByWishListIdFn]", () => {
  test("Should be defined", () => {
    expect(removeByWishListIdFn).toBeDefined();
  });

  test("Should be a valid function", () => {
    expect(typeof removeByWishListIdFn).toBe("function");
  });

  test("wishlist_id should be a valid parameter", () => {
    const wishlist_id = "";
    expect(() => removeByWishListIdFn(wishlist_id)).toThrow(
      "Invalid wishlist_id"
    );
  });

  test("wishlist_id should be a positive number", () => {
    const wishlist_id = -1;
    expect(() => removeByWishListIdFn(wishlist_id)).toThrow(
      "Invalid wishlist_id"
    );
  });

  test("should remove from wishlist", () => {
    const wishlist_id = 1;
    removeByWishListIdFn(wishlist_id);
  });
});

//removeByProductIdWishlistFn tests
describe("[removeByProductIdWishlistFn]", () => {
  test("Should be defined", () => {
    expect(removeByProductIdWishlistFn).toBeDefined();
  });

  test("Should be a valid function", () => {
    expect(typeof removeByProductIdWishlistFn).toBe("function");
  });

  test("product_id should be a valid parameter", () => {
    const product_id = "";
    expect(() => removeByProductIdWishlistFn(product_id)).toThrow(
      "Invalid product_id"
    );
  });

  test("product_id should be a positive number", () => {
    const product_id = -1;
    expect(() => removeByProductIdWishlistFn(product_id)).toThrow(
      "Invalid product_id"
    );
  });

  test("should remove from wishlist", () => {
    const product_id = 1;
    removeByProductIdWishlistFn(product_id);
  });
});
