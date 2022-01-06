//This code organizes and formats lists of words for the database. Enter the list in a multi line string. The only requirement is that each entry be on its own line.

let raw = `aardvark



penguin

bullfrog
civet

parrot
lion
penguin
toad
dog

husky

albacore
albacore tuna
tuna
albatross
tortoise
alligator
alligator gar
allosaurus
alpaca
alpine goat

dolphin
parrot
river dolphin
amberjack
beetle
alligator

bison
bulldog
cocker spaniel
cockroach

crow



kestrel

pitt bull
goat
robin

toad

leopard
anaconda


anchovy
condor
angelfish
anglerfish
goat

ant
worm
anteater
antelope
dog
chihuahua
horse
arapaima
arctic fox
arctic hare
arctic wolf

scorpion
armadillo

arthropod
elephant
giant hornet
palm civet
black bear

salmon

bulldog

gecko

labradoodle





deer

babirusa
baboon
camel
badger
baiji
bald eagle

baleen whale

lynx
python
spider
civet
bandicoot
catfish

barn owl
barn swallow
barnacle
barracuda



basset hound
bat


beagle
beaglier

bear
bearded dragon


beaver
bee
beefalo
beetle

sturgeon
beluga whale
orca
bengal tiger





bighorn sheep

bird
bird of paradise
birman
beetle
bison

black bear

dolphin
ferret
black mamba

rat
black rhino
black rhinoceros
swan
swift
wasp
black widow spider
black widow
ferret
blackbird
shark
beetle
blobfish
bloodhound
lizard
bull
catfish
duck
blue footed booby

iguana
blue jay
marlin
shark
blue whale
octopus
bluebird
bluefin tuna
boa constrictor
bobcat
bobolink
quail




bonito
cod
bonnethead shark
bonobo


border collie

borkie
orangutan
elephant

bottlenose dolphin

box turtle

bream
trout

brown bear
hyena
pelican

trout




buffalo

bull shark
bulldog
bullfrog

bumblebee
python

butterfly
butterfly fish

mouse
lizard
condor
quail
camel
cricket
spider
goose
lynx

horse
canary
crane
lion
capuchin
capybara
caracal
caribou

carp
carpenter ant
goat

cat
leopard

caterpillar
catfish

centipede

chameleon
catfish

cheetah

chickadee
chicken
chihuahua
chimaera
chimpanzee
chinchilla
alligator
shar-pei

chipmunk
crab

cicada

leopard
clownfish

cobra
main coon
tabby

cockatiel
cockatoo
cocker spaniel
cockroach
cod
codfish
salmon

colossal squid
shark
hawk


coral
bull
cougar
cow
coyote
crab
seal

crane

cricket
crocodile
gorilla
crow
cuckoo

cuttlefish

deer

deer tick
locust

diamondback rattlesnake

dingo
dodo
dog

dogfish


dolphin
donkey

dragonfly

duck

dung beetle
hamster
eagle
earthworm
earwig

eel

electric eel
elephant
shrew
elk
emperor penguin

emu

falcon

ferret

finch

firefly
fish

flamingo

flea
panther

flounder

fly

flying fish

flying squirrel

fox

frog

fruit bat
fruit fly

gecko

gerbil

ghost crab
snail

giant clam
panda bear
salamander

gibbon
gila monster
giraffe

glow worm
gnat
gnu
goat

goblin shark

golden eagle

golden shepherd

goldfish
goose
gopher
gorilla
grackle
grass snake
grasshopper
heron

great dane
great white shark
anaconda
tree frog
turtle

greyhound

grizzly bear

squirrel
groundhog
grouse
pig
guppy

haddock

hake
halibut
hammerhead shark
hamster

hare
duck
hawk

hedgehog

herring

honey badger
honey bee

horse
horsefly
horseshoe crab
sparrow
wren
housefly
howler monkey
squid
hummingbird
humpback whale

husky

hyena
ibex
ibis

iguana
jellyfish
rhinoceros
woodpecker

jackrabbit
jaguar
jellyfish

kangaroo
toucan

killer whale

king cobra
king crab

kingfisher

koala
kob
kodiak bear
kodkod
koi
koi fish
komodo dragon

krill

ladybug
sturgeon
trout


lamprey
sea turtle
lemming

lemur
leopard
liger
lion
lionfish
lizard
llama

lobster
locust
turtle
rottweiler

loon

lynx

macaque
macaw
mackerel
magpie
mako shark
mallard duck
mamba
manatee
duck

wolf
manta ray
turtle

marlin
marmoset
marmot
TRICERATOPS
stegosaurus
pterodactyl
mastadon
saber-toothed tiger

megalodon
sheep

mink
minnow
mite

mockingbird
mole
mole rat

mongoose


moose
moray eel
mountain goat
mountain lion
mule
mule deer
musk ox
muskrat

naked mole rat
narwhal

newt
heron

cardinal


opossum
orangutan

oriole
orka

ostrich
panda
panda bear
chameleon
parrot

partridge
peacock
pelican
peregrine falcon
pheasant
pig
pigeon
pika

pileated woodpecker
salmon
piranha
viper
platypus
poison dart frog
polar bear

porcupine
porpoise
chicken
prairie dog
monkey

puffin

python
quagga

quetzal

rabbit
raccoon
rattlesnake
crow
raven
reindeer
rhinoceros
ringtail
otter
roadrunner
sable
antelope
sailfish
salamander
salmon
crocodile
sandhill crane
scorpion
barn owl
screech owl
great horned owl

sea horse
sea lion
sea turtle
sheep
stork
shrew
siberian tiger


skunk
sloth
sloth bear
snake

snapping turtle
snipe
snow leopard
snowy owl

sperm whale
spider
spider monkey

spoonbill
squirrel
stegosaurus
stingray
stork
sturgeon
sugar glider
tortoise
swallow
swan
swift
swordfish
tarantula
tasmanian devil
tasmanian tiger
tawny owl
termite
tick
tiger
toad
toucan
tree frog
trout
tuna
tur
turkey
turkey vulture
turtle
turtle dove

tyrannosaurus
tyrannosaurus rex
T-rex
viper

vole

vulture

wallaby
walleye 
walrus
albatross
warthog
wasp
water buffalo
weasel
weaver
corgi
gorilla

whale shark
whippet
whitetail deer


whooping crane
wild boar

wildebeest
warbler

wolf
wolverine
wombat
bison

woodpecker

woolly mammoth
beetle
worm

yak
zebra
zebra finch
zebra mussel

zebra shark

zebu
zonkey
zorse
`






//Parses and organizes string (changes to lower case, splits, alphabetizes, trim spaces, removes empty elements, removes duplicates, converts to JSON).
let list = raw.toLowerCase().split("\n").sort().map(index => index.trim()).filter((a) => a);
let finalList = [...new Set(list)];
let jsonString = JSON.stringify(finalList)

//Writes JSON to file. Make sure to change file name before running
var fs = require('fs');
fs.writeFile("animalList.txt", jsonString, function(err) {
    if (err) {
        console.log(err);
    }
});
