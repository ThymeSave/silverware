import { Ingredient } from "./model";

enum VegetableCategory {
  Vegetable = "vegetable",
  Herb = "herbs",
  Nuts = "nuts",
  Cereals = "cereals",
  Gourds = "gourds",
}

enum FruitCategory {
  Fruits = "fruits",
  Pulse = "pulses",
  Beverage = "beverages",
}

enum MilkCategory {
  Cheese = "cheese",
  Milk = "milk",
}

enum MiscCategory {
  Coffee = "coffee",
  Tea = "teas",
  Baking = "baking",
  Eggs = "eggs",
  Confectioneries = "confectioneries",
  Dough = "dough",
  Soup = "soup",
  Spice = "spice",
  Snack = "snack",
  Afters = "afters",
  Pasta = "pasta"
}

enum MeatCategory {
  Meat = 'meat',
  Beef = 'beef',
  Chicken = 'chicken',
  Pork = 'pork',
  Aquatic = "aquatic",
}

enum FatCategory {
  VegetableFat = "vegetable_fat",
  AnimalFat = "animal_fat",
  Fat = "fat",
}

enum AlcoholCategory {
  Liquor = "liquor"
}

export const IngredientCategory = {
  ...VegetableCategory,
  ...MeatCategory,
  ...FruitCategory,
  ...MiscCategory,
  ...MilkCategory,
  ...FatCategory,
  ...AlcoholCategory,
}

const ingredients: { [key: string]: Ingredient } = {
  "angelica": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "savoy_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "silver_linden": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "kiwi": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "allium": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "garden_onion": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "leek": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "garlic": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "chives": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "lemon_verbena": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cashew_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "pineapple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "dill": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "custard_apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "wild_celery": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "peanut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "burdock": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "horseradish": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "tarragon": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "mugwort": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "asparagus": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "oat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "star_fruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "brazil_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "common_beet": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "borage": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "chinese_mustard": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "swede": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "rape": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "common_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cauliflower": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "brussel_sprouts": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "kohlrabi": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "broccoli": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chinese_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "turnip": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "pigeon_pea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "capers": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "papaya": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "safflower": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "caraway": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "pecan nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "chestnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "roman_camomile": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "chickpea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "endive": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chicory": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chinese_cinnamon": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "ceylon_cinnamon": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "watermelon": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "lime": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lemon": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pummelo": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mandarin_orange": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sweet_orange": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "coffee": {
    scalable: true,
    category: IngredientCategory.Coffee
  },
  "arabica_coffee": {
    scalable: true,
    category: IngredientCategory.Coffee
  },
  "robusta_coffee": {
    scalable: true,
    category: IngredientCategory.Coffee
  },
  "coriander": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "common_hazelnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "saffron": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "muskmelon": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "cucumber": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "cucurbita": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "cumin": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "turmeric": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "quince": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lemon_grass": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "globe_artichoke": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "wild_carrot": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "japanese_persimmon": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "cardamom": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "black_crowberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "loquat": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "rocket_salad": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "wax_apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "common_buckwheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "tartary_buckwheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "fig": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "fennel": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "strawberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_huckleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "soy_bean": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "sunflower": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sea_buckthornberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "barley": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "hyssop": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "star_anise": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "swamp_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "sweet_potato": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "black_walnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "common_walnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "lettuce": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "grass_pea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "sweet_bay": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "lentils": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "garden_cress": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "lovage": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "flaxseed": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "mexican_oregano": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "lichee": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lupine": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mango": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "german_camomile": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "lemon_balm": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "mentha": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "orange_mint": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cornmint": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "spearmint": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "peppermint": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "medlar": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "bitter_gourd": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "mulberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_mulberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "nutmeg": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sweet_basil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "evening_primrose": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "olive": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "sweet_marjoram": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "pot_marjoram": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "common_oregano": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "rice": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "millet": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "poppy": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "passion_fruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "parsnip": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "avocado": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "parsley": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "scarlet_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "lima_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "common_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "date": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_chokeberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "anise": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "pine_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "pepper_spice": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "pistachio": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "common_pea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "purslane": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "prunus": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "apricot": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sweet_cherry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sour_cherry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "european_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "almond": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "peach": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "guava": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pomegranate": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pear": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "radish": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "garden_rhubarb": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "blackcurrant": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "redcurrant": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "gooseberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "watercress": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "rosemary": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "rubus": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "cloudberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "red_raspberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_raspberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sorrel": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "common_sage": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "black_elderberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "summer_savory": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "winter_savory": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "rye": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "sesame": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "garden_tomato": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cherry_tomato": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "eggplant": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "potato": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "rowanberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sorghum": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "spinach": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cloves": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "tamarind": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "dandelion": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cocoa_bean": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "common_thyme": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "linden": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "small_leaf_linden": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "fenugreek": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "common_wheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "vaccinium": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lowbush_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sparkleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "highbush_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "american_cranberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "bilberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lingonberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "vanilla": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "common_verbena": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "broad_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "adzuki_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "gram_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "mung_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "climbing_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "cowpea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "muscadine_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "common_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "corn": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "ginger": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "arctic_blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "banana": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "bayberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "elliotts_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "canada_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "bog_bilberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "buffalo_currant": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "celeriac": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "celery_stalks": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chinese_chives": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "european_cranberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "deerberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "ginseng": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cascade_huckleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "oval_leaf_huckleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "evergreen_huckleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "red_huckleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "longan": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "macadamia_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "summer_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "fox_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "nectarine": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "rambutan": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "red_rice": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "annual_wild_rice": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "swiss_chard": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "lemon_thyme": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "tronchuda_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "japanese_walnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "welsh_onion": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "hard_wheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "shallot": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "carrot": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "triticale": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "black cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "half-highbush blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "celery leaves": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "chicory leaves": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "komatsuna": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "pak choy": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "napa cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chicory roots": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "grapefruit/pummelo hybrid": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "grapefruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "jostaberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "kai_lan": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "italian_oregano": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "oxheart_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "daikon_radish": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "black_radish": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "red_beetroot": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "sweet_rowanberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pineappple_sage": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "skunk_currant": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "beer": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "other_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "breakfast_cereal": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "other_soy_product": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "other_cereal_product": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "pasta": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "biscuit": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "sourdough": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "spirit": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "fortified_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "other_alcoholic_beverage": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "abalone": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "abiyuch": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "acerola": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "acorn": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "winter_squash": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "agar": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "red_king_crab": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "alfalfa": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "allspice": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "amaranth": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "arrowhead": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "arrowroot": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "asian_pear": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "atlantic_herring": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic_mackerel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "painted_comber": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic_pollock": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic_wolffish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "bamboo_shoots": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "striped_bass": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "beech_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "beluga_whale": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "bison": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "alaska_blackfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "blue_crab": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "blue_mussel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "northern_bluefin_tuna": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "bluefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "wild_boar": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "bowhead_whale": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "breadfruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "breadnut_tree_seed": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "rapini": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "buffalo": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "burbot": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "giant_butterbur": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "american_butterfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "butternut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "butternut_squash": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "calabash": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "cardoon": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "natal_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "carob": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "common_carp": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cassava": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "channel_catfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "chayote": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "cherimoya": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "chervil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "chia": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "chicken": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "chinese_broccoli": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chinese_chestnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "chinese_water_chestnut": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "garland_chrysanthemum": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cisco": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "nuttall_cockle": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "coconut": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pacific_cod": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic_cod": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "common_octopus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "corn_salad": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cottonseed": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "catjang_pea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "malus": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "squashberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "atlantic_croaker": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cusk": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cuttlefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "mule_deer": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "devilfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "dock": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "dolphin_fish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "freshwater_drum": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "mallard_duck": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "dungeness_crab": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "durian": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "eastern_oyster": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "freshwater_eel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "elderberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "elk": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "emu": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "oregon_yampah": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "european_anchovy": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "european_chestnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "turbot": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "fireweed": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "florida_pompano": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "ginkgo_nuts": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "greylag_goose": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "greenland_halibut": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "groundcherry": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "grouper": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "guinea_hen": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "haddock": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "hippoglossus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "hazelnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "hickory nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "horse": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "horseradish_tree": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "alaska_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "hyacinth_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "irish_moss": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_jack_mackerel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "jackfruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "japanese_chestnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "java_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "jerusalem_artichoke": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "jujube": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "jute": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "kale": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "kelp": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "king_mackerel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "kumquat": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lambsquarters": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "leather_chiton": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "wild_leek": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "common_ling": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "lingcod": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "american_lobster": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "loganberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lotus": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sacred_lotus": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "white_lupine": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "malabar_spinach": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "mammee_apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "purple_mangosteen": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "alpine_sweetvetch": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "milkfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "monkfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "moth_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "mountain_yam": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "striped_mullet": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "white_mustard": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "mustard_spinach": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "new_zealand_spinach": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "nopal": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "ocean_pout": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "north_pacific_giant_octopus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "ohelo_berry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "okra": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "tunicate": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "ostrich": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "spotted_seal": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_herring": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_oyster": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_rockfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "velvet_duck": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "common_persimmon": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pheasant": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "northern_pike": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pili_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "colorado_pinyon": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "pitanga": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "plains_prickly_pear": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "french_plantain": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "american_pokeweed": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "opium_poppy": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "prairie_turnip": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "prickly_pear": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "quinoa": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "european_rabbit": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "rainbow_smelt": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "rainbow trout": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "malabar plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "rose hip": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "roselle": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "orange roughy": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sablefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pink salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "chum salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "coho salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sockeye salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "chinook salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "salmonberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "common salsify": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "sapodilla": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mamey_sapote": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "spanish_mackerel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_sardine": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "scallop": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "scup": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sea_cucumber": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "steller_sea_lion": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "bearded_seal": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "ringed_seal": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sea_trout": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sesbania_flower": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "american_shad": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "shark": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sheefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sheep": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "sheepshead": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "hedge_mustard": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "skipjack_tuna": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "snapper": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "soursop": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "spelt": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "spirulina": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "squab": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "strawberry_guava": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "greater_sturgeon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "white_sucker": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sugar_apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pumpkinseed_sunfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "swordfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "taro": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "teff": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "tilefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "mexican_groundcherry": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "towel_gourd": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "salmonidae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "turkey": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "cattle": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "walleye": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "alaska_pollock": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "wasabi": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "wax_gourd": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "whelk": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "coalfish_pollock": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "broad_whitefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "whitefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "whiting": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "wild_rice": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "tea_leaf_willow": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "winged_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "yam": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "jicama": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "yautia": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "yellowfin_tuna": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "yellowtail_amberjack": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pollock": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "albacore_tuna": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "gadus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic_halibut": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_halibut": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "smelt": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "clupeinae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "spiny_lobster": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "snow_crab": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "black_eyed_pea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "deer": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "percoidei": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "perciformes": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "rabbit": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "domestic_goat": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "beefalo": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "bivalvia": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "squid": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "shrimp": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "crayfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "flatfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "domestic_pig": {
    scalable: true,
    category: IngredientCategory.Pork
  },
  "walrus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "alaska_wild_rhubarb": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "oriental_wheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "yardlong bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "quail": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "boysenberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "persian_lime": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "feijoa": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "rowal": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "jews_ear": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "common_mushroom": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "shiitake": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "purple_laver": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "wakame": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "enokitake": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "epazote": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "oyster_mushroom": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cloud_ear_fungus": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "maitake": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "ostrich_fern": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "spot_croaker": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sourdock": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "tinda": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "atlantic_menhaden": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "wheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "common_chokecherry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "agave": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "narrowleaf_cattail": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "jellyfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "anchovy": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "blue_whiting": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "carp_bream": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "chanterelle": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "sturgeon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "charr": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cinnamon": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "crab": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "common_dab": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "spiny_dogfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "anatidae": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "anguilliformes": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "true_frog": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "garfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "gadiformes": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "mountain_hare": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "lake_trout": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "lemon_sole": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "clawed_lobster": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "lumpsucker": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "scombridae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "marine_mussel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "norway_haddock": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "norway_lobster": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "norway_pout": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "oil_palm": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "true_oyster": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sago_palm": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "persimmon": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pikeperch": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pleuronectidae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "rock_ptarmigan": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "pacific_ocean_perch": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "black_salsify": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "true_seal": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "red_algae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "kombu": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "snail": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "true_sole": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "catfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "thistle": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "thunnus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "walnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "cetacea": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "columbidae": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "conch": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "grape_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "berry_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "other_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "apple_cider": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "liquor": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "cheese": {
    scalable: true,
    category: IngredientCategory.Cheese
  },
  "milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "eggs": {
    scalable: true,
    category: IngredientCategory.Eggs
  },
  "yogurt": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "vodka": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "whisky": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "ice_cream": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "gin": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "honey": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "liquorice": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "vinegar": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "rum": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "port_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "vermouth": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "sherry": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "madeira_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "nougat": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "toffee": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "cake": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "ymer": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "crisp_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "pastry": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "dragee": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "chewing_gum": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "marzipan": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "salad_dressing": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "sauce": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "salt": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "butter": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "butter_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "cream": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "sugar": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "sausage": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "meatball": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "mustard": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "pate": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "sugar_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "meat_bouillon": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "whey": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "casein": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "fruit_preserve": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "leavening_agent": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "marshmallow": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "gelatin": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "water": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "other_fish_product": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "milk_human": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "other_beverage": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "dumpling": {
    scalable: true,
    category: IngredientCategory.Dough
  },
  "soup": {
    scalable: true,
    category: IngredientCategory.Soup
  },
  "other_vegetable_product": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "syrup": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "tallow": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "remoulade": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "chocolate_spread": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "fruit_gum": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "curry_powder": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "other_candy": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "meringue": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "lard": {
    scalable: true,
    category: IngredientCategory.AnimalFat
  },
  "other_animal_fat": {
    scalable: true,
    category: IngredientCategory.AnimalFat
  },
  "other_cocoa_product": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "cocoa_butter": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "cocoa_powder": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cocoa_liquor": {
    scalable: true,
    category: IngredientCategory.Liquor
  },
  "chocolate": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "hot_chocolate": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "dried_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "kefir": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "buttermilk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "fermented_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "soy_sauce": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "miso": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "tofu": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "zwieback": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "roe": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cichlidae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "icing": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "green_turtle": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "baked_beans": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chili": {
    scalable: true,
    category: IngredientCategory.Spice
  },
  "taco": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "tortilla": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "nachos": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "processed_cheese": {
    scalable: true,
    category: IngredientCategory.Cheese
  },
  "salad": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cream_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "dulce_de_leche": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "topping": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "sweet_custard": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "heart_of_palm": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "popcorn": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "potato_chip": {
    scalable: true,
    category: IngredientCategory.Snack
  },
  "tortilla_chip": {
    scalable: true,
    category: IngredientCategory.Snack
  },
  "corn_chip": {
    scalable: true,
    category: IngredientCategory.Snack
  },
  "hibiscus_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "gelatin_dessert": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "junket": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "frybread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "other_frozen_dessert": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "morchella": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "pectin": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "pudding": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "waffle": {
    scalable: true,
    category: IngredientCategory.Afters
  },
  "soy_milk": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "meatloaf": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "sake": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "cocktail": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "bulgur": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "coffee_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "coffee_mocha": {
    scalable: true,
    category: IngredientCategory.Coffee
  },
  "semolina": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "tapioca_pearl": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "spread": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "egg_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "nutritional_drink": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "ketchup": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "adobo": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "butterfat": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "horned_melon": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "fruit_juice": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "relish": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "other_fruit_product": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "fruit_salad": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "soy_yogurt": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cold_cut": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "mixed_nuts": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "canola": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "babassu_palm": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "shea_tree": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "oil_seed_camellia": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "ucuhuba": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "phyllo_dough": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "cooking_oil": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "pie_crust": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "pie_filling": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "pie": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "shortening": {
    scalable: true,
    category: IngredientCategory.Fat
  },
  "soy_cream": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "ice_cream_cone": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "molasses": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "cracker": {
    scalable: true,
    category: IngredientCategory.Snack
  },
  "nance": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "naranjilla": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "natto": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "ravioli": {
    scalable: true,
    category: IngredientCategory.Pasta
  },
  "evaporated_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "flour": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "akutaq": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "dough": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "pita_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "focaccia": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "bagel": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "other_bread_product": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "piki_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "french_toast": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "wheat_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "rye_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "oat_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "potato_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "cornbread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "corn_grits": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "multigrain_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "rice_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "pan_dulce": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "raisin_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "wonton_wrapper": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "trail_mix": {
    scalable: true,
    category: IngredientCategory.Snack
  },
  "greenthread_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "fruit-flavor_drink": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "vegetable_juice": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "horchata": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "soft_drink": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "frozen_yogurt": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "milkshake": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "chocolate_mousse": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "dripping": {
    scalable: true,
    category: IngredientCategory.AnimalFat
  },
  "ascidians": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "yellow_pond_lily": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "stuffing": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "edible_shell": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "fudge": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "candy_bar": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "condensed_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "margarine": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "margarine_like_spread": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "milk_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "soft_necked_garlic": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chinese_bayberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mushrooms": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "alcoholic_beverages": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "onion_family_vegetables": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "pomes": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "brassicas": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cereal_products": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "citrus": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "cocoa_products": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "coffee_products": {
    scalable: true,
    category: IngredientCategory.Coffee
  },
  "crustaceans": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "milk_products": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "fats_oils": {
    scalable: true,
    category: IngredientCategory.Fat
  },
  "fishes": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "herbs_spices": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "pulses": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "mollusks": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "nuts": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "beverages": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "fruits": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "green_vegetables": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "root_vegetables": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "sunburst_squash": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "green_zucchini": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "yellow_zucchini": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "green_bell_pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "yellow_bell_pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "orange_bell_pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "red_bell_pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "italian_sweet_red_pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "yellow_wax_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "green_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "saskatoon_berry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "nanking_cherry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "japanese_pumpkin": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "white_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "romaine_lettuce": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "milk_zero_fat": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "milk_one_percent_fat": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "milk_two_percent_fat": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "milk_three_percent_fat": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "gentiana_lutea": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "juniperus_communis": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "albizia_gummifera": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "mundu": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "rabbiteye_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "yali_pear": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "asparagus_racemosus": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "evergreen_blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "asparagus_fern": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "thornless_blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "tropical_highland_blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "andean_blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "green_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "olive_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "macroalgae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "red_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "linseed_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "rapeseed_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "soybean_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "guarana": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "mate": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "white_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "sour_orange": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "egg_yolk": {
    scalable: true,
    category: IngredientCategory.Eggs
  },
  "white_mulberry": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "canola_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "dessert_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "red_champagne": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "red_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "white_champagne": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "red_grape_juice": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "white_grape_juice": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "crosne": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "red_clover": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "partridge_berry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mikan": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mozzarella_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "plain_cream_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "cheddar_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "parmesan_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "almond_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "coconut_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "salted_butter": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "sunflower_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "coconut_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "peanut_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cottonseed_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "corn_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "avocado_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "grapeseed_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sesame_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "monterey_jack_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "swiss_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "cottage_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "blue_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "clam": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sour_cream": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "whole_wheat_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "jalapeno_pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "greek_feta_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "eddoe": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "plantain": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "clementine": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "green_apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "white_onion": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "red_onion": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "green_onion": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "green_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "red_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "green_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "black_raisin": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "cannellini_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "green_lentil": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "cubanelle_pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "acorn_squash": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "iceberg_lettuce": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "japanese_sea_bass": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pea_shoots": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "yau_choy": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "water_spinach": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chineese_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "green_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "wampee": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pitaya": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "goji": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "monk_fruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "cantaloupe_melon": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "hawthorn": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lantern_fruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "white_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "cape_gooseberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "herbal_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "fish_oil": {
    scalable: true,
    category: IngredientCategory.AnimalFat
  },
  "taco_shell": {
    scalable: true,
    category: IngredientCategory.Baking,
  },
  "tostada_shell": {
    scalable: true,
    category: IngredientCategory.Baking,
  },
};

export default ingredients;
