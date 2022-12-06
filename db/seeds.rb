puts 'Clearing Database'

Plant.destroy_all
User.destroy_all
UserPlant.destroy_all
Comment.destroy_all

puts 'Database is cleared!'


puts 'Creating Plants'
p1 = Plant.create(plant_name: "Asparagus Fern", scientific_name: "Asparagus Aethiopicus", light_requirement: "Lots of indirect sunlight", water_requirement: "Light, regular watering", humidity: "Medium to high", image: "https://ak1.ostkcdn.com/images/products/is/images/direct/db944e3d5d2f2233dde41851bb4b843fda30dfb7/RusticReach-Asparagus-Fern-Plant-Stem-32%22-Tall.jpg")
p2 = Plant.create(plant_name: "Monstera", scientific_name: "Monstera Deliciosa", light_requirement: "Low to moderate indirect light", water_requirement: "Moderate (allow the top two inches of soil to dry first)", humidity: "High", image: "https://cdn.shopify.com/s/files/1/1752/4567/products/monstera_sm_10.png?v=1539265671")
p3 = Plant.create(plant_name: "Fiddle Leaf", scientific_name: "Ficus Lyrata", light_requirement: "Bright, indirect light, tolerates moderate direct light", water_requirement: "Moderate (allow the top of the soil to dry first)", humidity: "High", image: "https://mobileimages.lowes.com/productimages/a6f075e6-7916-427b-9e8e-c96396864dff/43988537.jpg?size=pdhism")
p4 = Plant.create(plant_name: "Spider", scientific_name: "Chlorophytum comosum", light_requirement: "Bright, indirect light (Less than 2 hours to no direct sunlight)", water_requirement: "Medium", humidity: "Medium", image: "https://www.houseplantsexpert.com/wp-content/uploads/2022/09/spiderplant_2.jpg")
p5 = Plant.create(plant_name: "Aloe Vera", scientific_name: "Aloe vera (L.) Burm. f.", light_requirement: "Bright light", water_requirement: "Low", humidity: "Low", image: "https://www.houseplantsexpert.com/wp-content/uploads/2022/08/aloe-vera-plant-1.jpg")
p6 = Plant.create(plant_name: "African Violet", scientific_name: "Saintpaulia ionantha", light_requirement: "Bright indirect sunlight", water_requirement: "Very regular moderate watering", humidity: "Medium to high", image: "https://cdn.shopify.com/s/files/1/0068/4215/5090/products/pl_AfricanViolet_4IN_po_grower_detail-3_a60507e2-50ab-486b-adf0-d2173a24c5e8_360x.jpg?v=1659114011")
p7 = Plant.create(plant_name: "Yucca", scientific_name: "Yucca elephantipes", light_requirement: "Full sun", water_requirement: "Low to moderate", humidity: "Low to medium", image: "https://cdn.shopify.com/s/files/1/0025/4309/1770/files/yucca-plant_large.jpg?v=1567782930")
p8 = Plant.create(plant_name: "Bromeliad", scientific_name: "Aechmea spp.", light_requirement: "Bright, diffused light but can tolerate low light as well", water_requirement: "Low to medium", humidity: "High", image: "https://fyf.tac-cdn.net/images/products/large/P-345.jpg?auto=webp&quality=60&width=690")
p9 = Plant.create(plant_name: "Jade", scientific_name: "Crassula ovata", light_requirement: "Bright, indirect light", water_requirement: "Low to medium", humidity: "Medium", image: "https://cdn.shopify.com/s/files/1/0212/1030/0480/products/jade-plant_09a5d7ec-32fa-4bc7-b97f-5358cebaebaa.jpg?v=1643221731")
puts 'Plants are created'


puts 'Creating Users'
u1 = User.create(name: "Kate", email: "klupinac@gmail.com", password: '1234')
u2 = User.create(name: "Sunny", email: "sunnyhagey@gmail.com", password: '1234')
puts 'Users are created'


puts 'Creating User Plants'
up1 = UserPlant.create(plant: p1, user: u1)
up2 = UserPlant.create(plant: p2, user: u1)
up3 = UserPlant.create(plant: p3, user: u1)
up4 = UserPlant.create(plant: p4, user: u1)
up5 = UserPlant.create(plant: p5, user: u2)
up6 = UserPlant.create(plant: p6, user: u2)
up7 = UserPlant.create(plant: p7, user: u2)
up8 = UserPlant.create(plant: p8, user: u2)
up9 = UserPlant.create(plant: p4, user: u2)
up10 = UserPlant.create(plant: p8, user: u1)
puts 'User Plants are created'

puts 'Creating Comments'
c1 = Comment.create(content: "Super easy plant to care for, great for beginners!", plant: p4, user: u1)
c2 = Comment.create(content: "Toxic to pets!", plant: p4, user: u2)
c3 = Comment.create(content: "I really love the look of this plant in my living room, really elegant and cozy at the same time.", plant: p3, user: u1)
c4 = Comment.create(content: "Aloe has several healing benefits, great to have on hand and super cool plant!", plant: p5, user: u2)

puts 'Comments Created'

puts 'Seeding done!'