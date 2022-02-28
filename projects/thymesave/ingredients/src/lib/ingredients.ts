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
  Pasta = "pasta",
  Fluids = "fluids",
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

export const ingredients: { [key: string]: Ingredient } = {
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
  "acorn_squash": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "adobo": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "adzuki_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "agar": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "agave": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "akutaq": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "alaska_blackfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "alaska_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "alaska_pollock": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "alaska_wild_rhubarb": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "albacore_tuna": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "albizia_gummifera": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "alcoholic_beverages": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "alfalfa": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "allium": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "allspice": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "almond": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "almond_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "alpine_sweetvetch": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "amaranth": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "american_butterfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "american_cranberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "american_lobster": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "american_pokeweed": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "american_shad": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "anatidae": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "anchovy": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "andean_blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  }, "angelica": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "anguilliformes": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "anise": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "annual_wild_rice": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "apple_cider": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "apricot": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "arabica_coffee": {
    scalable: true,
    category: IngredientCategory.Coffee
  },
  "arctic_blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "arrowhead": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "arrowroot": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "ascidians": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "asian_pear": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "asparagus": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "asparagus_fern": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "asparagus_racemosus": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "atlantic_salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic_cod": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic_croaker": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic_halibut": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic_herring": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic_mackerel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "atlantic_menhaden": {
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
  "aubergine": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "avocado": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "avocado_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "babassu_palm": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "bacon": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "bacon_cubes": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "bagel": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "baked_beans": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "baking_soda": {
    scalable: false,
    category: IngredientCategory.Baking
  },
  "balsamic": {
    scalable: false,
    category: IngredientCategory.Herb
  },
  "bamboo_shoots": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "banana": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "barley": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "basil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "bayberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "bay_laurel": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "bearded_seal": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "beech_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "beef_roulade": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "beefalo": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "beer": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "beluga_whale": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "berry_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "beverages": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "bilberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "biscuit": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "bison": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "bitter_gourd": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "bivalvia": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "black cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "black_chokeberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_crowberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_elderberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_eyed_pea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "black_huckleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_mulberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_radish": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "black_raisin": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_raspberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "black_salsify": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "black_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "black_walnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "blackcurrant": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "blue_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "blue_crab": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "blue_mussel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "blue_whiting": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "bluefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "bog_bilberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "borage": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "bowhead_whale": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "boysenberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "brassicas": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "brazil_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "breadfruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "breadnut_tree_seed": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "breakfast_cereal": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "broad_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "broad_whitefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "broccoli": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "brussel_sprouts": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "buffalo": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "buffalo_currant": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "bulgur": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "burbot": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "burdock": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "butter": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "butter_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "butterfat": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "buttermilk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "butternut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "butternut_squash": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cake": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "calabash": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "canada_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "candy_bar": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "cannellini_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "canola": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "canola_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cantaloupe_melon": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "cape_gooseberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "capers": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "caraway": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cardamom": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cardoon": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "carob": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "carp_bream": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "carrot": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cascade_huckleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "casein": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "cashew_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "cassava": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "catfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "catjang_pea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "cattle": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "cauliflower": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "celeriac": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "celery leaves": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "celery": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "celery_stalks": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cereal_products": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "cetacea": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "ceylon_cinnamon": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "channel_catfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "chanterelle": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "charr": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "chayote": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "cheddar_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "cheese": {
    scalable: true,
    category: IngredientCategory.Cheese
  },
  "cherimoya": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "cherry_tomato": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chervil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "chestnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "chewing_gum": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "chia": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "chicken": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "chicken_breast": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "chicken_breast_filet": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "chicken_broth": {
    scalable: true,
    category: IngredientCategory.Soup
  },
  "chickpea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "chicory leaves": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chicory roots": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chicory": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chilli": {
    scalable: true,
    category: IngredientCategory.Spice
  },
  "chilli_pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chineese_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "chinese_bayberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "chinese_broccoli": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chinese_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chinese_chestnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "chinese_chives": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "chinese_cinnamon": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "chinese_mustard": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chinese_water_chestnut": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "chinook salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "chives": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "chocolate": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "chocolate_mousse": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "chocolate_spread": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "chum salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cichlidae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cinnamon": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cisco": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "citrus": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "clam": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "clarified_butter": {
    scalable: true,
    category: IngredientCategory.AnimalFat
  },
  "clawed_lobster": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "clementine": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "climbing_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "cloud_ear_fungus": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cloudberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "cloves": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "clupeinae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "coalfish_pollock": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cocktail": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "cocoa_bean": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cocoa_butter": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "cocoa_liquor": {
    scalable: true,
    category: IngredientCategory.Liquor
  },
  "cocoa_powder": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cocoa_products": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "coconut": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "coconut_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "coconut_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "coffee": {
    scalable: true,
    category: IngredientCategory.Coffee
  },
  "coffee_mocha": {
    scalable: true,
    category: IngredientCategory.Coffee
  },
  "coffee_products": {
    scalable: true,
    category: IngredientCategory.Coffee
  },
  "coffee_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "coho salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cold_cut": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "colorado_pinyon": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "columbidae": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "common salsify": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "common_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "common_beet": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "common_buckwheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "common_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "common_carp": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "common_chokecherry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "common_dab": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "common_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "common_hazelnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "common_ling": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "common_mushroom": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "common_octopus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "common_oregano": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "common_pea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "common_persimmon": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "common_sage": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "common_thyme": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "common_verbena": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "common_walnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "common_wheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "conch": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "condensed_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "cooking_oil": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "coriander": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "corn": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "corn_chip": {
    scalable: true,
    category: IngredientCategory.Snack
  },
  "corn_grits": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "corn_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "corn_salad": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "cornbread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "cornflakes": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "cornmint": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cottage_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "cottonseed": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cottonseed_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cowpea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "crab": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cracker": {
    scalable: true,
    category: IngredientCategory.Snack
  },
  "crayfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cream": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "cream_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "crisp_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "crosne": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "crustaceans": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "cubanelle_pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
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
  "curd": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "curry_paste": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "curry_powder": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "cusk": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "custard_apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "cuttlefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "daikon_radish": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "dandelion": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "date": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "deer": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "deerberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "dessert_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "devilfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "dill": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "dock": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "dolphin_fish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "domestic_goat": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "domestic_pig": {
    scalable: true,
    category: IngredientCategory.Pork
  },
  "dough": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "dragee": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "dried_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "dripping": {
    scalable: true,
    category: IngredientCategory.AnimalFat
  },
  "dulce_de_leche": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "dumpling": {
    scalable: true,
    category: IngredientCategory.Dough
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
  "eddoe": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "edible_shell": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "egg_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "egg_yolk": {
    scalable: true,
    category: IngredientCategory.Eggs
  },
  "eggplant": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "eggs": {
    scalable: true,
    category: IngredientCategory.Eggs
  },
  "elderberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "elk": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "elliotts_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "emu": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "endive": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "enokitake": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "epazote": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "european_anchovy": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "european_chestnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "european_cranberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "european_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "european_rabbit": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "evaporated_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "evening_primrose": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "evergreen_blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "evergreen_huckleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "fats_oils": {
    scalable: true,
    category: IngredientCategory.Fat
  },
  "feijoa": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "fennel": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "fenugreek": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "fermented_milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "fig": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "fireweed": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "fish_oil": {
    scalable: true,
    category: IngredientCategory.AnimalFat
  },
  "fishes": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "flatfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "flaxseed": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "florida_pompano": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "flour": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "focaccia": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "fortified_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "food_starch": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "fox_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "french_plantain": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "french_toast": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "fresh_cream": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "freshwater_drum": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "freshwater_eel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "frozen_yogurt": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "fruit-flavor_drink": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "fruit_gum": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "fruit_juice": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "fruit_preserve": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "fruit_salad": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "fruits": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "frybread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "fudge": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "gadiformes": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "gadus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "garden_cress": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "garden_onion": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "garden_rhubarb": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "garden_tomato": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "garfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "garland_chrysanthemum": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "garlic": {
    scalable: false,
    category: IngredientCategory.Herb
  },
  "garlic_glove": {
    scalable: false,
    category: IngredientCategory.Herb
  },
  "garlic_powder": {
    scalable: false,
    category: IngredientCategory.Herb
  },
  "gelatin": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "gelatin_dessert": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "gentiana_lutea": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "german_camomile": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "giant_butterbur": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "gin": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "ginger": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "ginkgo_nuts": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "ginseng": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "globe_artichoke": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "goji": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "gooseberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "gram_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "grape_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "grapefruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "grapeseed_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "grass_pea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "greater_sturgeon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "greek_feta_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "green_apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "green_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "green_bell_pepper": {
    scalable: false,
    category: IngredientCategory.Vegetable
  },
  "green_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "green_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "green_lentil": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "green_onion": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "green_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "green_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "green_turtle": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "green_vegetables": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "green_zucchini": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "greenland_halibut": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "greenthread_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "greylag_goose": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "ground_meat": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "groundcherry": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "grouper": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "guarana": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "guava": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "guinea_hen": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "haddock": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "half-highbush blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "ham": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "hard_wheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "hawthorn": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "hazelnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "heart_of_palm": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "hedge_mustard": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "herb_butter": {
    scalable: false,
    category: IngredientCategory.AnimalFat
  },
  "herbal_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "herbs_spices": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "hibiscus_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "hickory nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "highbush_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "hippoglossus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "honey": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "horchata": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "horned_melon": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "horse": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "horseradish": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "horseradish_tree": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "hot_chocolate": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "hot_water": {
    scalable: true,
    category: IngredientCategory.Fluids
  },
  "hyacinth_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "hyssop": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "ice_cream": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "ice_cream_cone": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "iceberg_lettuce": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "icing": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "icing_sugar": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "irish_moss": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "italian_herbs": {
    scalable: false,
    category: IngredientCategory.Herb
  },
  "italian_oregano": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "italian_sweet_red_pepper": {
    scalable: false,
    category: IngredientCategory.Vegetable
  },
  "jackfruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "jalapeno_pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "japanese_chestnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "japanese_persimmon": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "japanese_pumpkin": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "japanese_sea_bass": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "japanese_walnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "java_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "jellyfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "jerusalem_artichoke": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "jews_ear": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "jicama": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "jostaberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "jujube": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "juniperus_communis": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "junket": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "jute": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "kai_lan": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "kale": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "kefir": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "kelp": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "ketchup": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "king_mackerel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "king_prawns": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "kiwi": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "kohlrabi": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "komatsuna": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "kombu": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "kumquat": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lake_trout": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "lambsquarters": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "lantern_fruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lard": {
    scalable: true,
    category: IngredientCategory.AnimalFat
  },
  "lasagna_plate": {
    scalable: true,
    category: IngredientCategory.Pasta
  },
  "leather_chiton": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "leavening_agent": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "leek": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "lemon": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lemon_balm": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "lemon_grass": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "lemon_juice": {
    scalable: false,
    category: IngredientCategory.Herb
  },
  "lemon_sole": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "lemon_thyme": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "lemon_verbena": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "lentils": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "lettuce": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "lichee": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lima_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "lime": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "linden": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "lingcod": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "lingonberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "linseed_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "liquor": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "liquorice": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "loganberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "longan": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "loquat": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lotus": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "lovage": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "lowbush_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "lowfat_quark": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "lumpsucker": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "lupine": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "macadamia_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "macroalgae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "madeira_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "maitake": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "majoram": {
    scalable: false,
    category: IngredientCategory.Herb
  },
  "malabar plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "malabar_spinach": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "mallard_duck": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "malus": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mamey_sapote": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mammee_apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mandarin_orange": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mango": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "maple_syrup": {
    scalable: true,
    category: IngredientCategory.Fluids
  },
  "margarine": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "margarine_like_spread": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "marine_mussel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "marshmallow": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "marzipan": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "mascarpone": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "mate": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "meat_bouillon": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "meat_soup": {
    scalable: true,
    category: IngredientCategory.Soup
  },
  "meatball": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "meatloaf": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "medlar": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mentha": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "meringue": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "mexican_groundcherry": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "mexican_oregano": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "mikan": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "milk": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "milk_human": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "milk_one_percent_fat": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "milk_products": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "milk_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "milk_three_percent_fat": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "milk_two_percent_fat": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "milk_zero_fat": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "milkfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "milkshake": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "millet": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "miso": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "mixed_nuts": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "molasses": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "mollusks": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "monk_fruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "monkfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "monterey_jack_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "morchella": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "more": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "moth_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "mountain_hare": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "mountain_yam": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "mozzarella_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "mugwort": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "mulberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mule_deer": {
    scalable: true,
    category: IngredientCategory.Beef
  },
  "multigrain_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "mundu": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mung_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "muscadine_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "mushrooms": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "muskmelon": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "mustard": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "mustard_spinach": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "nachos": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "nance": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "nanking_cherry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "napa_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "naranjilla": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "narrowleaf_cattail": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "natal_plum": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "natto": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "nectarine": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "new_zealand_spinach": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "nopal": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "north_pacific_giant_octopus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "northern_bluefin_tuna": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "northern_pike": {
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
  "nougat": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "nutmeg": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "nutritional_drink": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "nuts": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "nuttall_cockle": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "oat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "oat_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "oatmeal": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "ocean_pout": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "ohelo_berry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "oil_palm": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "oil_seed_camellia": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "okra": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "olive": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "olive_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "onion_family_vegetables": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "opium_poppy": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "orange roughy": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "orange_bell_pepper": {
    scalable: false,
    category: IngredientCategory.Vegetable
  },
  "orange_juice": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "orange_mint": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "oregon_yampah": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "oriental_wheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "ostrich": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "ostrich_fern": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "other_alcoholic_beverage": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "other_animal_fat": {
    scalable: true,
    category: IngredientCategory.AnimalFat
  },
  "other_beverage": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "other_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "other_bread_product": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "other_candy": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "other_cereal_product": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "other_cocoa_product": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "other_fish_product": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "other_frozen_dessert": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "other_fruit_product": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "other_onion": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "other_soy_product": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "other_vegetable_product": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "other_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "oval_leaf_huckleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "oxheart_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "oyster_mushroom": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "pacific_cod": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_halibut": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_herring": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_jack_mackerel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_ocean_perch": {
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
  "pacific_salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pacific_sardine": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "painted_comber": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pak choy": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "palmin": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "pan_dulce": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "papaya": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "paprika": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "parmesan_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "parsely": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "parsley": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "parsnip": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "partridge_berry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "passion_fruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pasta": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "pastry": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "pate": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "pea_shoots": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "peach": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "peanut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "peanut_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "peanut_butter": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "pear": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pecan_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "pectin": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "pepper": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "pepper_spice": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "peppermint": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "perciformes": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "percoidei": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "persian_lime": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "persimmon": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pheasant": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "phyllo_dough": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "pickle": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "pie": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "pie_crust": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "pie_filling": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "pigeon_pea": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "pikeperch": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "piki_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "pili_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "pine_nut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "pineapple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pineappple_sage": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "pink salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pistachio": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "pita_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "pitanga": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pitaya": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "plain_cream_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "plains_prickly_pear": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "plantain": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pleuronectidae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pollock": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "pomegranate": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pomes": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "popcorn": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "poppy": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "pork_goulash": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "pork_mince": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "pork_tenderloin": {
    scalable: true,
    category: IngredientCategory.Pork
  },
  "port_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "pot_marjoram": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "potato": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "potato_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "potato_chip": {
    scalable: true,
    category: IngredientCategory.Snack
  },
  "prairie_turnip": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "prickly_pear": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "processed_cheese": {
    scalable: true,
    category: IngredientCategory.Cheese
  },
  "prunus": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pudding": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "puff_pastry": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "pulses": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "pummelo": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "pumpkinseed_sunfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "purple_laver": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "purple_mangosteen": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "purslane": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "quail": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "quills": {
    scalable: true,
    category: IngredientCategory.Pasta
  },
  "quince": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "quinoa": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "rabbit": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "rabbiteye_blueberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "radish": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "rainbow trout": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "rainbow_smelt": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "raisin": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "raisin_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "rambutan": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "rape": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "rapeseed_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "rapini": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "ravioli": {
    scalable: true,
    category: IngredientCategory.Pasta
  },
  "red_algae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "red_beetroot": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "red_bell_pepper": {
    scalable: false,
    category: IngredientCategory.Vegetable
  },
  "red_champagne": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "red_clover": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "red_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "red_grape_juice": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "red_huckleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "red_king_crab": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "red_onion": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "red_raspberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "red_rice": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "red_tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "red_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "redcurrant": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "relish": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "remoulade": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "rice": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "rice_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "rice_pudding": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "ridged": {
    scalable: true,
    category: IngredientCategory.Pasta
  },
  "ringed_seal": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "robusta_coffee": {
    scalable: true,
    category: IngredientCategory.Coffee
  },
  "rock_ptarmigan": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "rocket": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "rocket_salad": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "roe": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "romaine_lettuce": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "roman_camomile": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "root_vegetables": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "rose hip": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "roselle": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "rosemary": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "rowal": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "rowanberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "rubus": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "rum": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "rye": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "rye_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "sablefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sacred_lotus": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "safflower": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "saffron": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sago_palm": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sake": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "salad": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "salad_dressing": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "salami": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "salmonberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "salmonidae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "salt": {
    scalable: false,
    category: IngredientCategory.Baking
  },
  "salted_butter": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "sapodilla": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "saskatoon_berry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sauce": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "sauce_binder": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "sausage": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "savoy_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "scallop": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "scarlet_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "scombridae": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "scup": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sea_buckthornberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sea_cucumber": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sea_trout": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "semolina": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "sesame": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sesame_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sesbania_flower": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "shallot": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "shark": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "shea_tree": {
    scalable: true,
    category: IngredientCategory.Herb
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
  "sherry": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "shiitake": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "shortening": {
    scalable: true,
    category: IngredientCategory.Fat
  },
  "shrimp": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sieved_tomatoes": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "silver_linden": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "skipjack_tuna": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "skunk_currant": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "small_leaf_linden": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "smelt": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "snail": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "snapper": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "snow_crab": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sockeye salmon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "soft_drink": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "soft_necked_garlic": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "soft_wheat_semolina": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "sorghum": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "sorrel": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "soup": {
    scalable: true,
    category: IngredientCategory.Soup
  },
  "sour": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "sour_cherry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sour_cream": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "sour_orange": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sourdock": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sourdough": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "soursop": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "soy_bean": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "soy_cream": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "soy_milk": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "soy_sauce": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "soy_yogurt": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "soybean_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "spaghetti": {
    scalable: true,
    category: IngredientCategory.Pasta
  },
  "spanish_mackerel": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sparkleberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "split_peas": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "spearmint": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "spelt": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "spinach": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "spiny_dogfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "spiny_lobster": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "spirit": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "spirulina": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "spot_croaker": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "spotted_seal": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "spread": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "spring_onions": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "squab": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "squashberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "squid": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "star_anise": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "star_fruit": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "steller_sea_lion": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "strawberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "strawberry_guava": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "striped_bass": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "striped_mullet": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "stuffing": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "sturgeon": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "sugar": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "sugar_apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sugar_substitute": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "summer_grape": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "summer_savory": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sunburst_squash": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "sunflower": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sunflower_oil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "swamp_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "swede": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "sweet_basil": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sweet_bay": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sweet_cherry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sweet_custard": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "sweet_marjoram": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "sweet_orange": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "sweet_potato": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "sweet_rowanberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "swiss_chard": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "swiss_cheese": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "swordfish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "syrup": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "taco": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "taco_shell": {
    scalable: true,
    category: IngredientCategory.Baking,
  },
  "tallow": {
    scalable: true,
    category: IngredientCategory.VegetableFat
  },
  "tamarind": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "tapioca_pearl": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "taro": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "tarragon": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "tartary_buckwheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "tea": {
    scalable: true,
    category: IngredientCategory.Tea
  },
  "tea_leaf_willow": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "teff": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "thistle": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "thornless_blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "thunnus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "tilefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "tinda": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "toffee": {
    scalable: true,
    category: IngredientCategory.Confectioneries
  },
  "tofu": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "tomato": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "tomato_paste": {
    scalable: false,
    category: IngredientCategory.Vegetable
  },
  "topping": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "tortilla": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "tortilla_chip": {
    scalable: true,
    category: IngredientCategory.Snack
  },
  "tostada_shell": {
    scalable: true,
    category: IngredientCategory.Baking,
  },
  "towel_gourd": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "trail_mix": {
    scalable: true,
    category: IngredientCategory.Snack
  },
  "triticale": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "tronchuda_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "tropical_highland_blackberry": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "true_frog": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "true_oyster": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "true_seal": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "true_sole": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "tumeric": {
    scalable: false,
    category: IngredientCategory.Herb
  },
  "tuna": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "tunicate": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "turbot": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "turkey": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "turkey_breast": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "turmeric": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "turnip": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "ucuhuba": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "vaccinium": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "vanilla": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "vanilla_sugar": {
    scalable: false,
    category: IngredientCategory.Baking
  },
  "vegetable_juice": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "velvet_duck": {
    scalable: true,
    category: IngredientCategory.Chicken
  },
  "vermouth": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "vinegar": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "vodka": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "waffle": {
    scalable: true,
    category: IngredientCategory.Afters
  },
  "wakame": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "walleye": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "walnut": {
    scalable: true,
    category: IngredientCategory.Nuts
  },
  "walrus": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "wampee": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "wasabi": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "water": {
    scalable: true,
    category: IngredientCategory.Fluids
  },
  "water_spinach": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "watercress": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "watermelon": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "wax_apple": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "wax_gourd": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "welsh_onion": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "wheat": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "wheat_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "whelk": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "whey": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "whisky": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "white_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "white_cabbage": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "white_champagne": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "white_grape_juice": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "white_lupine": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "white_mulberry": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "white_mustard": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "white_onion": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "white_sucker": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "white_wine": {
    scalable: true,
    category: IngredientCategory.Beverage
  },
  "whitefish": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "whiting": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "whole_wheat_bread": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "wild_boar": {
    scalable: true,
    category: IngredientCategory.Meat
  },
  "wild_carrot": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "wild_celery": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "wild_leek": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "wild_rice": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
  "winged_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "winter_savory": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "winter_squash": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "wonton_wrapper": {
    scalable: true,
    category: IngredientCategory.Baking
  },
  "yali_pear": {
    scalable: true,
    category: IngredientCategory.Fruits
  },
  "yam": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "yardlong bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "yau_choy": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "yautia": {
    scalable: true,
    category: IngredientCategory.Vegetable
  },
  "yellow_bell_pepper": {
    scalable: false,
    category: IngredientCategory.Vegetable
  },
  "yellow_pond_lily": {
    scalable: true,
    category: IngredientCategory.Herb
  },
  "yellow_wax_bean": {
    scalable: true,
    category: IngredientCategory.Pulse
  },
  "yellow_zucchini": {
    scalable: true,
    category: IngredientCategory.Gourds
  },
  "yellowfin_tuna": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "yellowtail_amberjack": {
    scalable: true,
    category: IngredientCategory.Aquatic
  },
  "ymer": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "yogurt": {
    scalable: true,
    category: IngredientCategory.Milk
  },
  "zwieback": {
    scalable: true,
    category: IngredientCategory.Cereals
  },
};

export default ingredients;
