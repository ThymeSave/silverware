import { Ingredient } from "@thymesave/core";

import { mapMetaData } from "./util";

enum VegetableCategory {
  Vegetable = "vegetable",
  Nuts = "nuts",
  Cereals = "cereals",
  Gourds = "gourds",
}

enum CondimentCategory {
  Herbs = "herbs",
  Salt = "salt",
  Sugar = "sugar",
  Spice = "spice",
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
  Confectioneries = "confectioneries",
  Dough = "dough",
  Soup = "soup",
  Snack = "snack",
  Afters = "afters",
  Pasta = "pasta",
  Fluids = "fluids",
  Dip = "dip"
}

enum BakingCategory {
  Baking = "baking",
  Eggs = "eggs",
  Flour = "flour",
}

enum MeatCategory {
  Meat = 'meat',
  Beef = 'beef',
  Chicken = 'chicken',
  Pork = 'pork'
}

enum FishCategory {
  Aquatic = "aquatic",
}

enum FatCategory {
  Vegetable_Fat = "vegetable_fat",
  Animal_Fat = "animal_fat",
  Fat = "fat",
}

enum AlcoholCategory {
  Liquor = "liquor",
  Rum = "rum",
}

export const IngredientCategory = {
  ...VegetableCategory,
  ...MeatCategory,
  ...FruitCategory,
  ...MiscCategory,
  ...MilkCategory,
  ...FatCategory,
  ...AlcoholCategory,
  ...BakingCategory,
  ...CondimentCategory,
  ...FishCategory,
};

export const categoryIcons = mapMetaData([
  [VegetableCategory, "tomato"],
  [MeatCategory, "sausage"],
  [FruitCategory, "apple"],
  [MiscCategory, "jar"],
  [MilkCategory, "milk_carton"],
  [FatCategory, "frypan"],
  [AlcoholCategory, "cocktail"],
  [BakingCategory, "cake"],
  [CondimentCategory, "spoon"],
  [FishCategory, "fish"],
]);

export const ingredients: { [key: string]: Ingredient } = {
  "abalone": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "abiyuch": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "acerola": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "acorn": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "acorn_squash": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "adobo": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "adzuki_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "agar": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "agave": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "akutaq": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "alaska_blackfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "alaska_blueberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "alaska_pollock": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "alaska_wild_rhubarb": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "albacore_tuna": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "albizia_gummifera": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "alcoholic_beverages": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "alfalfa": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "allium": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "allspice": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "almond": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "almond_milk": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "alpine_sweetvetch": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "amaranth": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "american_butterfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "american_cranberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "american_lobster": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "american_pokeweed": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "american_shad": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "anatidae": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "anchovy": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "andean_blackberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "angelica": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "anguilliformes": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "anise": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "annual_wild_rice": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "apple": {
    category: IngredientCategory.Fruits,
    scalable: true,
  }, "apple_cider": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "apricot": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "arabica_coffee": {
    category: IngredientCategory.Coffee,
    scalable: true,
  },
  "arctic_blackberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "arrowhead": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "arrowroot": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "ascidians": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "asian_pear": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "asparagus": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "asparagus_fern": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "asparagus_racemosus": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "atlantic_cod": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "atlantic_croaker": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "atlantic_halibut": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "atlantic_herring": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "atlantic_mackerel": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "atlantic_menhaden": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "atlantic_pollock": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "atlantic_salmon": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "atlantic_wolffish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "aubergine": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "avocado": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "avocado_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "babassu_palm": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "bacon": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "bacon_cubes": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "bagel": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "baked_beans": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "baking_soda": {
    category: IngredientCategory.Baking,
    scalable: false,
  },
  "balsamic": {
    category: IngredientCategory.Herbs,
    scalable: false,
  },
  "bamboo_shoots": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "banana": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "barley": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "basil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "bay_laurel": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "bayberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "bearded_seal": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "beech_nut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "beef_roulade": {
    category: IngredientCategory.Beef,
    scalable: true,
  },
  "beefalo": {
    category: IngredientCategory.Beef,
    scalable: true,
  },
  "beer": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "beluga_whale": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "berry_wine": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "beverages": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "bilberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "biscuit": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "bison": {
    category: IngredientCategory.Beef,
    scalable: true,
  },
  "bitter_gourd": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "bivalvia": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "black cabbage": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "black_chokeberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "black_crowberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "black_elderberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "black_eyed_pea": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "black_huckleberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "black_mulberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "black_plum": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "black_radish": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "black_raisin": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "black_raspberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "black_salsify": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "black_tea": {
    category: IngredientCategory.Tea,
    scalable: true,
  },
  "black_walnut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "blackberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "blackcurrant": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "blue_cheese": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "blue_crab": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "blue_mussel": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "blue_whiting": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "bluefish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "bog_bilberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "borage": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "bowhead_whale": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "boysenberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "brassicas": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "brazil_nut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "breadfruit": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "breadnut_tree_seed": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "breakfast_cereal": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "broad_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "broad_whitefish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "broccoli": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "brussel_sprouts": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "buffalo": {
    category: IngredientCategory.Beef,
    scalable: true,
  },
  "buffalo_currant": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "bulgur": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "burbot": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "burdock": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "butter": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "butter_substitute": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "butterfat": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "buttermilk": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "butternut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "butternut_squash": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "cabbage": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "cake": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "calabash": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "canada_blueberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "candy_bar": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "cannellini_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "canola": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "canola_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "cantaloupe_melon": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "cape_gooseberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "capers": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "caraway": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "cardamom": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "cardoon": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "carob": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "carp_bream": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "carrot": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "cascade_huckleberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "casein": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "cashew_nut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "cassava": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "catfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "catjang_pea": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "cattle": {
    category: IngredientCategory.Beef,
    scalable: true,
  },
  "cauliflower": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "celeriac": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "celery": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "celery leaves": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "celery_stalks": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "cereal_products": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "cetacea": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "ceylon_cinnamon": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "channel_catfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "chanterelle": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "charr": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "chayote": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "cheddar_cheese": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "cheese": {
    category: IngredientCategory.Cheese,
    scalable: true,
  },
  "cherimoya": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "cherry_tomato": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "chervil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "chestnut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "chewing_gum": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "chia": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "chicken": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "chicken_breast": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "chicken_breast_filet": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "chicken_broth": {
    category: IngredientCategory.Soup,
    scalable: true,
  },
  "chickpea": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "chicory": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "chicory leaves": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "chicory roots": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "chili_flakes": {
    category: IngredientCategory.Spice,
    scalable: true,
  },
  "chilli": {
    category: IngredientCategory.Spice,
    scalable: true,
  },
  "chilli_pepper": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "chineese_plum": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "chinese_bayberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "chinese_broccoli": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "chinese_cabbage": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "chinese_chestnut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "chinese_chives": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "chinese_cinnamon": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "chinese_mustard": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "chinese_water_chestnut": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "chinook salmon": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "chives": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "chocolate": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "chocolate_mousse": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "chocolate_spread": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "chum salmon": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "cichlidae": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "cinnamon": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "cisco": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "citrus": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "clam": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "clarified_butter": {
    category: IngredientCategory.Animal_Fat,
    scalable: true,
  },
  "clawed_lobster": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "clementine": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "climbing_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "cloud_ear_fungus": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "cloudberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "cloves": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "clupeinae": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "coalfish_pollock": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "cocktail": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "cocoa_bean": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "cocoa_butter": {
    category: IngredientCategory.Vegetable_Fat,
    scalable: true,
  },
  "cocoa_liquor": {
    category: IngredientCategory.Liquor,
    scalable: true,
  },
  "cocoa_powder": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "cocoa_products": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "coconut": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "coconut_milk": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "coconut_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "coffee": {
    category: IngredientCategory.Coffee,
    scalable: true,
  },
  "coffee_mocha": {
    category: IngredientCategory.Coffee,
    scalable: true,
  },
  "coffee_products": {
    category: IngredientCategory.Coffee,
    scalable: true,
  },
  "coffee_substitute": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "coho salmon": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "cold_cut": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "colorado_pinyon": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "columbidae": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "common salsify": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "common_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "common_beet": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "common_buckwheat": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "common_cabbage": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "common_carp": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "common_chokecherry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "common_dab": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "common_grape": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "common_hazelnut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "common_ling": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "common_octopus": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "common_oregano": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "common_pea": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "common_persimmon": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "common_sage": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "common_thyme": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "common_verbena": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "common_walnut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "common_wheat": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "conch": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "condensed_milk": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "cooking_oil": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "coriander": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "corn": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "corn_chip": {
    category: IngredientCategory.Snack,
    scalable: true,
  },
  "corn_grits": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "corn_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "corn_salad": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "cornbread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "cornflakes": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "cornmint": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "cottage_cheese": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "cottonseed": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "cottonseed_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "cowpea": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "crab": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "cracker": {
    category: IngredientCategory.Snack,
    scalable: true,
  },
  "crayfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "cream": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "cream_substitute": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "crisp_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "crosne": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "croutons": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "crustaceans": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "cubanelle_pepper": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "cucumber": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "cucurbita": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "cumin": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "curd": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "curry_paste": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "curry_powder": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "cusk": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "custard_apple": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "cuttlefish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "daikon_radish": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "dandelion": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "date": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "deer": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "deerberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "dessert_wine": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "devilfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "dill": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "dock": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "dolphin_fish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "domestic_goat": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "domestic_pig": {
    category: IngredientCategory.Pork,
    scalable: true,
  },
  "dough": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "dragee": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "dried_milk": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "dripping": {
    category: IngredientCategory.Animal_Fat,
    scalable: true,
  },
  "dulce_de_leche": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "dumpling": {
    category: IngredientCategory.Dough,
    scalable: true,
  },
  "dungeness_crab": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "durian": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "eastern_oyster": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "eddoe": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "edible_shell": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "egg": {
    category: IngredientCategory.Eggs,
    scalable: true,
  },
  "egg_substitute": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "egg_yolk": {
    category: IngredientCategory.Eggs,
    scalable: true,
  },
  "eggplant": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "elderberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "elk": {
    category: IngredientCategory.Beef,
    scalable: true,
  },
  "elliotts_blueberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "emu": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "endive": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "enokitake": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "epazote": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "european_anchovy": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "european_chestnut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "european_cranberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "european_plum": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "european_rabbit": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "evaporated_milk": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "evening_primrose": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "evergreen_blackberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "evergreen_huckleberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "falafel": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "fats_oils": {
    category: IngredientCategory.Fat,
    scalable: true,
  },
  "feijoa": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "fennel": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "fenugreek": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "fermented_milk": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "fig": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "fireweed": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "fish_oil": {
    category: IngredientCategory.Animal_Fat,
    scalable: true,
  },
  "fishes": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "flatfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "flaxseed": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "florida_pompano": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "flour": {
    category: IngredientCategory.Flour,
    scalable: true,
  },
  "focaccia": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "food_starch": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "fortified_wine": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "fox_grape": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "french_plantain": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "french_toast": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "fresh_cream": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "freshwater_drum": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "freshwater_eel": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "frozen_yogurt": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "fruit-flavor_drink": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "fruit_gum": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "fruit_juice": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "fruit_preserve": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "fruit_salad": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "fruits": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "frybread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "fudge": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "gadiformes": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "gadus": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "garden_cress": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "garden_onion": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "garden_rhubarb": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "garden_tomato": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "garfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "garland_chrysanthemum": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "garlic": {
    category: IngredientCategory.Herbs,
    scalable: false,
  },
  "garlic_glove": {
    category: IngredientCategory.Herbs,
    scalable: false,
  },
  "garlic_powder": {
    category: IngredientCategory.Herbs,
    scalable: false,
  },
  "gelatin": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "gelatin_dessert": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "gentiana_lutea": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "german_camomile": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "giant_butterbur": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "gin": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "ginger": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "ginkgo_nuts": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "ginseng": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "globe_artichoke": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "gnocchi": {
    category: IngredientCategory.Pasta,
    scalable: true,
  },
  "goji": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "gold_raisins": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "gooseberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "gram_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "grape": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "grape_wine": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "grapefruit": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "grapeseed_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "grass_pea": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "gratin_cheese": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "greater_sturgeon": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "greek_feta_cheese": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "greek_yogurt": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "green_apple": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "green_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "green_bell_pepper": {
    category: IngredientCategory.Vegetable,
    scalable: false,
  },
  "green_cabbage": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "green_grape": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "green_lentil": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "green_onion": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "green_plum": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "green_tea": {
    category: IngredientCategory.Tea,
    scalable: true,
  },
  "green_turtle": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "green_vegetables": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "green_zucchini": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "greenland_halibut": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "greenthread_tea": {
    category: IngredientCategory.Tea,
    scalable: true,
  },
  "greylag_goose": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "ground_meat": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "groundcherry": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "grouper": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "guarana": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "guava": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "guinea_hen": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "haddock": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "half-highbush blueberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "ham": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "hard_wheat": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "harissa": {
    category: IngredientCategory.Spice,
    scalable: true,
  },
  "hawthorn": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "hazelnut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "heart_of_palm": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "hedge_mustard": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "herb_butter": {
    category: IngredientCategory.Animal_Fat,
    scalable: false,
  },
  "herbal_tea": {
    category: IngredientCategory.Tea,
    scalable: true,
  },
  "herbs": {
    category: IngredientCategory.Herbs,
    scalable: false,
  },
  "herbs_spices": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "hibiscus_tea": {
    category: IngredientCategory.Tea,
    scalable: true,
  },
  "hickory nut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "highbush_blueberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "hippoglossus": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "honey": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "horchata": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "horned_melon": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "horse": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "horseradish": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "horseradish_tree": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "hot_chocolate": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "hot_sauce": {
    category: IngredientCategory.Spice,
    scalable: false,
  },
  "hot_water": {
    category: IngredientCategory.Fluids,
    scalable: true,
  },
  "hummus": {
    category: IngredientCategory.Dip,
    scalable: true,
  },
  "hyacinth_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "hyssop": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "ice_cream": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "ice_cream_cone": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "iceberg_lettuce": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "icing": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "icing_sugar": {
    category: IngredientCategory.Sugar,
    scalable: true,
  },
  "irish_moss": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "italian_herbs": {
    category: IngredientCategory.Herbs,
    scalable: false,
  },
  "italian_oregano": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "italian_sweet_red_pepper": {
    category: IngredientCategory.Vegetable,
    scalable: false,
  },
  "jackfruit": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "jalapeno": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "jalapeno_pepper": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "japanese_chestnut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "japanese_persimmon": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "japanese_pumpkin": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "japanese_sea_bass": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "japanese_walnut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "java_plum": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "jellyfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "jerusalem_artichoke": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "jews_ear": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "jicama": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "jostaberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "jujube": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "juniperus_communis": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "junket": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "jute": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "kai_lan": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "kale": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "kefir": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "kelp": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "ketchup": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "king_mackerel": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "king_prawns": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "kiwi": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "kohlrabi": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "komatsuna": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "kombu": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "kumquat": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "lake_trout": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "lambsquarters": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "lantern_fruit": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "lard": {
    category: IngredientCategory.Animal_Fat,
    scalable: true,
  },
  "lasagna_plate": {
    category: IngredientCategory.Pasta,
    scalable: true,
  },
  "leather_chiton": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "leavening_agent": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "leek": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "lemon": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "lemon_balm": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "lemon_grass": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "lemon_juice": {
    category: IngredientCategory.Herbs,
    scalable: false,
  },
  "lemon_sole": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "lemon_thyme": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "lemon_verbena": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "lentils": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "lettuce": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "lichee": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "lima_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "lime": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "linden": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "lingcod": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "lingonberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "linseed_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "liquor": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "liquorice": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "loganberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "longan": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "loquat": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "lotus": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "lovage": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "lowbush_blueberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "lowfat_quark": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "lumpsucker": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "lupine": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "macadamia_nut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "macroalgae": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "madeira_wine": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "maitake": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "majoram": {
    category: IngredientCategory.Herbs,
    scalable: false,
  },
  "malabar plum": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "malabar_spinach": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "mallard_duck": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "malus": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "mamey_sapote": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "mammee_apple": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "mandarin_orange": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "mango": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "maple_syrup": {
    category: IngredientCategory.Fluids,
    scalable: true,
  },
  "margarine": {
    category: IngredientCategory.Vegetable_Fat,
    scalable: true,
  },
  "margarine_like_spread": {
    category: IngredientCategory.Vegetable_Fat,
    scalable: true,
  },
  "marine_mussel": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "marshmallow": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "marzipan": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "mascarpone": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "mate": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "meat_bouillon": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "meat_soup": {
    category: IngredientCategory.Soup,
    scalable: true,
  },
  "meatball": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "meatloaf": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "medlar": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "mentha": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "meringue": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "mexican_groundcherry": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "mexican_oregano": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "mikan": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "milk": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "milk_human": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "milk_one_percent_fat": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "milk_products": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "milk_substitute": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "milk_three_percent_fat": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "milk_two_percent_fat": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "milk_zero_fat": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "milkfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "milkshake": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "millet": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "miso": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "mixed_nuts": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "molasses": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "mollusks": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "monk_fruit": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "monkfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "monterey_jack_cheese": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "morchella": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "more": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "moth_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "mountain_hare": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "mountain_yam": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "mozzarella_cheese": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "mugwort": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "mulberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "mule_deer": {
    category: IngredientCategory.Beef,
    scalable: true,
  },
  "multigrain_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "mundu": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "mung_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "muscadine_grape": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "mushrooms": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "muskmelon": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "mustard": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "mustard_spinach": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "nachos": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "nance": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "nanking_cherry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "napa_cabbage": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "naranjilla": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "narrowleaf_cattail": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "natal_plum": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "natron": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "natto": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "nectarine": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "new_zealand_spinach": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "nopal": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "north_pacific_giant_octopus": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "northern_bluefin_tuna": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "northern_pike": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "norway_haddock": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "norway_lobster": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "norway_pout": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "nougat": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "nutmeg": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "nutritional_drink": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "nuts": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "nuttall_cockle": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "oat": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "oat_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "oatmeal": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "ocean_pout": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "ohelo_berry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "oil": {
    category: IngredientCategory.Fat,
    scalable: true,
  },
  "oil_palm": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "oil_seed_camellia": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "okra": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "olive": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "olive_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "onion": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "onion_family_vegetables": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "opium_poppy": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "orange roughy": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "orange_bell_pepper": {
    category: IngredientCategory.Vegetable,
    scalable: false,
  },
  "orange_juice": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "orange_mint": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "oregon_yampah": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "oriental_wheat": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "ostrich": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "ostrich_fern": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "other_alcoholic_beverage": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "other_animal_fat": {
    category: IngredientCategory.Animal_Fat,
    scalable: true,
  },
  "other_beverage": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "other_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "other_bread_product": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "other_candy": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "other_cereal_product": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "other_cocoa_product": {
    category: IngredientCategory.Vegetable_Fat,
    scalable: true,
  },
  "other_fish_product": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "other_frozen_dessert": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "other_fruit_product": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "other_onion": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "other_soy_product": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "other_vegetable_product": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "other_wine": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "oval_leaf_huckleberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "oxheart_cabbage": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "oyster_mushroom": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "pacific_cod": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pacific_halibut": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pacific_herring": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pacific_jack_mackerel": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pacific_ocean_perch": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pacific_oyster": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pacific_rockfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pacific_salmon": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pacific_sardine": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "painted_comber": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pak choy": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "palmin": {
    category: IngredientCategory.Vegetable_Fat,
    scalable: true,
  },
  "pan_dulce": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "papaya": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "paprika": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "parmesan_cheese": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "parsley": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "parsnip": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "partridge_berry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "passion_fruit": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "pasta": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "pastry": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "pate": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "pea_shoots": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "peach": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "peanut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "peanut_butter": {
    category: IngredientCategory.Vegetable_Fat,
    scalable: true,
  },
  "peanut_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "pear": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "pecan_nut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "pectin": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "pepper": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "pepper_spice": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "peppermint": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "perciformes": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "percoidei": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "persian_lime": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "persimmon": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "pheasant": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "phyllo_dough": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "pickle": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "pie": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "pie_crust": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "pie_filling": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "pigeon_pea": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "pikeperch": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "piki_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "pili_nut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "pine_nut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "pineapple": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "pineappple_sage": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "pink salmon": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pistachio": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "pita_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "pitanga": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "pitaya": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "plain_cream_cheese": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "plains_prickly_pear": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "plantain": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "pleuronectidae": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pollock": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "pomegranate": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "pomegranate_seeds": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "pomes": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "popcorn": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "poppy": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "pork_goulash": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "pork_mince": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "pork_tenderloin": {
    category: IngredientCategory.Pork,
    scalable: true,
  },
  "port_wine": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "pot_marjoram": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "potato": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "potato_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "potato_chip": {
    category: IngredientCategory.Snack,
    scalable: true,
  },
  "prairie_turnip": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "prickly_pear": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "processed_cheese": {
    category: IngredientCategory.Cheese,
    scalable: true,
  },
  "prunus": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "pudding": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "puff_pastry": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "pulses": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "pummelo": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "pumpkinseed_sunfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "purple_laver": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "purple_mangosteen": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "purslane": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "quail": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "quills": {
    category: IngredientCategory.Pasta,
    scalable: true,
  },
  "quince": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "quinoa": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "rabbit": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "rabbiteye_blueberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "radish": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "rainbow trout": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "rainbow_smelt": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "raisin": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "raisin_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "rambutan": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "rape": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "rapeseed_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "rapini": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "ravioli": {
    category: IngredientCategory.Pasta,
    scalable: true,
  },
  "red_algae": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "red_beetroot": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "red_bell_pepper": {
    category: IngredientCategory.Vegetable,
    scalable: false,
  },
  "red_champagne": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "red_clover": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "red_grape": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "red_grape_juice": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "red_huckleberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "red_king_crab": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "red_onion": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "red_raspberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "red_rice": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "red_tea": {
    category: IngredientCategory.Tea,
    scalable: true,
  },
  "red_wine": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "redcurrant": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "relish": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "remoulade": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "rice": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "rice_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "rice_pudding": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "ricotta": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "ridged": {
    category: IngredientCategory.Pasta,
    scalable: true,
  },
  "ringed_seal": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "robusta_coffee": {
    category: IngredientCategory.Coffee,
    scalable: true,
  },
  "rock_ptarmigan": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "rocket": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "rocket_salad": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "roe": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "romaine_lettuce": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "roman_camomile": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "root_vegetables": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "rose hip": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "roselle": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "rosemary": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "rowal": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "rowanberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "rubus": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "rum": {
    category: IngredientCategory.Rum,
    scalable: true,
  },
  "rye": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "rye_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "sablefish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "sacred_lotus": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "safflower": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "saffron": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "sago_palm": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "sake": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "salad": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "salad_dressing": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "salami": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "salmonberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "salmonidae": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "salt": {
    category: IngredientCategory.Salt,
    scalable: false,
  },
  "salted_butter": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "sapodilla": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "saskatoon_berry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "sauce": {
    category: IngredientCategory.Soup,
    scalable: true,
  },
  "sauce_binder": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "sausage": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "savoy_cabbage": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "scallop": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "scarlet_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "scombridae": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "scup": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "sea_buckthornberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "sea_cucumber": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "sea_trout": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "semolina": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "sesame": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "sesame_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "sesame_seeds": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "sesbania_flower": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "shallot": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "shark": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "shea_tree": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "sheefish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "sheep": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "sheepshead": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "sherry": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "shiitake": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "shortening": {
    category: IngredientCategory.Fat,
    scalable: true,
  },
  "shrimp": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "sieved_tomatoes": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "silver_linden": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "skipjack_tuna": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "skunk_currant": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "small_leaf_linden": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "smelt": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "snail": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "snapper": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "snow_crab": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "sockeye salmon": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "soft_drink": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "soft_necked_garlic": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "soft_wheat_semolina": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "sorghum": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "sorrel": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "soup": {
    category: IngredientCategory.Soup,
    scalable: true,
  },
  "sour": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "sour_cherry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "sour_cream": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "sour_orange": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "sourdock": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "sourdough": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "soursop": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "soy_bean": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "soy_cream": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "soy_milk": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "soy_sauce": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "soy_yogurt": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "soybean_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "spaghetti": {
    category: IngredientCategory.Pasta,
    scalable: true,
  },
  "spanish_mackerel": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "sparkleberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "spearmint": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "spelt": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "spinach": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "spiny_dogfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "spiny_lobster": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "spirit": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "spirulina": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "split_peas": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "spot_croaker": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "spotted_seal": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "spread": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "spring_onions": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "squab": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "squashberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "squid": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "star_anise": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "star_fruit": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "steller_sea_lion": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "strawberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "strawberry_guava": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "strip_steak": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "striped_bass": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "striped_mullet": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "stuffing": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "sturgeon": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "sugar": {
    category: IngredientCategory.Sugar,
    scalable: true,
  },
  "sugar_apple": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "sugar_substitute": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "summer_grape": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "summer_savory": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "sunburst_squash": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "sunflower": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "sunflower_oil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "swamp_cabbage": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "swede": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "sweet_basil": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "sweet_bay": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "sweet_cherry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "sweet_custard": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "sweet_marjoram": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "sweet_orange": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "sweet_potato": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "sweet_rowanberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "swiss_chard": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "swiss_cheese": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "swordfish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "syrup": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "taco": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "taco_shell": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "tahini": {
    category: IngredientCategory.Spice,
    scalable: true,
  },
  "tallow": {
    category: IngredientCategory.Vegetable_Fat,
    scalable: true,
  },
  "tamarind": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "tapioca_pearl": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "taro": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "tarragon": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "tartary_buckwheat": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "tea": {
    category: IngredientCategory.Tea,
    scalable: true,
  },
  "tea_leaf_willow": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "teff": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "thistle": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "thornless_blackberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "thunnus": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "tilefish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "tinda": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "toffee": {
    category: IngredientCategory.Confectioneries,
    scalable: true,
  },
  "tofu": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "tomato": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "tomato_paste": {
    category: IngredientCategory.Vegetable,
    scalable: false,
  },
  "topping": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "tortilla": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "tortilla_chip": {
    category: IngredientCategory.Snack,
    scalable: true,
  },
  "tostada_shell": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "towel_gourd": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "trail_mix": {
    category: IngredientCategory.Snack,
    scalable: true,
  },
  "triticale": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "tronchuda_cabbage": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "tropical_highland_blackberry": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "true_frog": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "true_oyster": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "true_seal": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "true_sole": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "tumeric": {
    category: IngredientCategory.Herbs,
    scalable: false,
  },
  "tuna": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "tunicate": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "turbot": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "turkey": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "turkey_breast": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "turmeric": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "turnip": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "ucuhuba": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "vaccinium": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "vanilla": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "vanilla_sugar": {
    category: IngredientCategory.Baking,
    scalable: false,
  },
  "vegetable_broth": {
    category: IngredientCategory.Soup,
    scalable: true,
  },
  "vegetable_juice": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "velvet_duck": {
    category: IngredientCategory.Chicken,
    scalable: true,
  },
  "vermouth": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "vinegar": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "vodka": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "waffle": {
    category: IngredientCategory.Afters,
    scalable: true,
  },
  "wakame": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "walleye": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "walnut": {
    category: IngredientCategory.Nuts,
    scalable: true,
  },
  "walrus": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "wampee": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "wasabi": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "water": {
    category: IngredientCategory.Fluids,
    scalable: true,
  },
  "water_spinach": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "watercress": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "watermelon": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "wax_apple": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "wax_gourd": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "welsh_onion": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "wheat": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "wheat_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "whelk": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "whey": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "whisky": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "white_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "white_cabbage": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "white_champagne": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "white_grape_juice": {
    category: IngredientCategory.Beverage,
    scalable: true,
  },
  "white_lupine": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "white_mulberry": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "white_mustard": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "white_onion": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "white_sucker": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "white_wine": {
    category: IngredientCategory.Fluids,
    scalable: true,
  },
  "whitefish": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "whiting": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "whole_wheat_bread": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "wild_boar": {
    category: IngredientCategory.Meat,
    scalable: true,
  },
  "wild_carrot": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "wild_celery": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "wild_leek": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "wild_rice": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
  "winged_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "winter_savory": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "winter_squash": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "wonton_wrapper": {
    category: IngredientCategory.Baking,
    scalable: true,
  },
  "yali_pear": {
    category: IngredientCategory.Fruits,
    scalable: true,
  },
  "yam": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "yardlong bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "yau_choy": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "yautia": {
    category: IngredientCategory.Vegetable,
    scalable: true,
  },
  "yellow_bell_pepper": {
    category: IngredientCategory.Vegetable,
    scalable: false,
  },
  "yellow_pond_lily": {
    category: IngredientCategory.Herbs,
    scalable: true,
  },
  "yellow_wax_bean": {
    category: IngredientCategory.Pulse,
    scalable: true,
  },
  "yellow_zucchini": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "yellowfin_tuna": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "yellowtail_amberjack": {
    category: IngredientCategory.Aquatic,
    scalable: true,
  },
  "ymer": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "yogurt": {
    category: IngredientCategory.Milk,
    scalable: true,
  },
  "zucchini": {
    category: IngredientCategory.Gourds,
    scalable: true,
  },
  "zwieback": {
    category: IngredientCategory.Cereals,
    scalable: true,
  },
};

export default ingredients;
