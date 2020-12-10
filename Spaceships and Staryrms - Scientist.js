/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Class
	Effect:     This script adds the class called "Scientist"
				This is taken from Spaceships and Starwyrms (https://www.drivethrurpg.com/product/258895/Spaceships-and-Starwyrms-Core-Sourcebook)

	Please support the creator of this content (Michael Wolf) and download his material from the DMs Guild website: https://www.dmsguild.com/browse.php?x=0&y=0&author=Michael%20Wolf
*/

var iFileName = "Spaceships and Staryrms - Scientist.js";
RequiredSheetVersion(12.999);

	scientistSpellTable = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl 5
		[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl 6
		[0, 0, 0, 3, 0, 0, 0, 0, 0], //lvl 7
		[0, 0, 0, 3, 0, 0, 0, 0, 0], //lvl 8
		[0, 0, 0, 0, 3, 0, 0, 0, 0], //lvl 9
		[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl10
		[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl11
		[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl12
		[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl13
		[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl14
		[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl15
		[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl16
		[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl17
		[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl18
		[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl19
		[0, 0, 0, 0, 5, 0, 0, 0, 0]  //lvl20
	]

//now make the scientist class
ClassList["scientist"] = {
	regExpSearch : /scientist/i,
	name : "Scientist",
	source : ["S&S", 130],
	primaryAbility : "\n \u2022 Scientist: Intelligence;",
	abilitySave : 4,
	prereqs : "\n \u2022 Scientist: Intelligence 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 6,
	saves : ["Int", "Wis"],
	skills : ["\n\n" + toUni("Scientist") + ": Choose three from Arcana, History, Insight, Investigation, Medicine, Nature, Perception, Persuasion, Stealth, and Survival."],
	toolProfs : { 
    primary : [["Any Tool or kit", 3]],
    secondary : [["Any Tool or kit", 3]],
    },
	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],
	weapons : [
		[true, false, ["explosives"]],
	],
	equipment : "Scientist starting equipment:\n \u2022 Any simple weapon;\n \u2022 Any light armor;\n \u2022 Two tools or kits, an explorer's pack and shamanic focus\n\nAlternatively, choose 2d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Research Focus", ["chemistry", "computers", "engineering", "medicine"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : "scientist1",
	abilitySave : 4,
		spellcastingKnown : {
		cantrips : [3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6],
		spells : ['book'],
		prepared : true,
	},
	
	spellcastingList : {
		class : "any",
		level : [0, 5],
		ritual : false,
	},
	
features : {
	
			"spellcasting" : {
			name : "Spellcasting",
			source : ["P", 114],
			minlevel : 1,
			description : "\n   " + "I can prepare and use Gadgets and inventions." + "\n   " + "Gadets work identically to cantrips, except they are not spells and can't be interacted with in ways that spells can." + "\n  " + "Inventions work identically to spells, draining power from a dark matter battery.",
		},
	
			"tool expertise" : {
			name : "Tool Expertise",
			source : ["S&S", 134],
			minlevel : 1,
			description : "\n   " + "Any time you make an ability check using a tool you’re proficient in, you add twice your proficiency instead of just your proficiency.",
		},
		
				"subclassfeature1" : { 
			name : "Research Focus",
			source : ["S&S", 103],
			minlevel : 2,
			description : "\n   " + "Select an area of scientific research to specialize in \"Class\" field" + "\n   " + "Choose either Chemistry, Computers, Engineering, and Medicine.",
			},

			"signature weapon" : {
			name : "Signature Weapon",
			source : ["S&S", 134],
			minlevel : 3,
			description : "\n   " + "Choose a simple weapon upon which to base this weapon. The constructed weapon has the base properties of that weapon, including range, damage types, and other relevant properties. Attack and damage rolls you make with this custom weapon use your Intelligence modifier instead of the normal modifier you would use.",
		},

			"careful consideration" : {
			name : "Careful Consideration",
			source : ["S&S", 135],
			minlevel : 10,
			description : "\n   " + "Whenever you make an ability check you are proficient in using your Intelligence modifier and you roll less than a 10 on the die, you may treat the die as if you had rolled a 10.",
		},

			"masterpiece" : {
			name : "Masterpiece",
			source : ["S&S", 135],
			minlevel : 11,
			description : "\n   " + "Choose one 6th-level spell from the scientist invention list as a Masterpiece. You can use your Masterpiece invention once without expending a battery charge, as it has its own internal power source.",
		},

			"quick construction" : {
			name : "Quick Construction",
			source : ["S&S", 135],
			minlevel : 20,
			description : "\n   " + "It now only takes you 10 minutes to change which inventions you have prepared and constructed. In addition, you can charge one of your Dark Matter Batteries using your Core with 1 action instead of 1 minute.",
		},

  },
},
  
//Create the Chemistry subclasses
ClassSubList["chemistry"] = {
        regExpSearch : /^(?=.*chemistry).*$/i,
				subname : "Chemistry",
        source : ["S&S", 135],
				features : {
				
				"subclassfeature2" : {
				name : "Bonus Proficiencies",
        source : ["S&S", 136],
        minlevel : 2,        
				description : "\n   " + "You become proficient with the artisan's tools (chemistry) and the Arcana skill. If you are already proficient in Arcana, choose another Intelligence skill.",
        toolProfs : [["Alchemist Supplies"]],
        skills : ["Arcana"],
        skillstxt : ["\n\n" + toUni("Verity") + ": Expertise in Arcana."],
        },

				"subclassfeature2.1" : {
				name : "Explosive Innovation",
        source : ["S&S", 136],
        minlevel : 2,        
        description : "\n   " + "Whenever a gadget or invention you activate would deal damage, you add your Intelligence modifier to the damage dealt. At 3rd level, you don’t gain the Signature Weapon feature. Instead, at 5th level this feature becomes more powerful.",
        additional : ["", "", "", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8"],
        usages : [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6],
        },

        "subclassfeature6" : {
				name : "Elemental Analysis and Purification",
        source : ["S&S", 136],
        minlevel : 6,        
        description : "\n   " + "You know how to run quick chemical test which takes 1 minute, during which you can determine all the known elements (and the percentage of each) that make up a material, liquid, or a local atmosphere." + "\n   " + "In addition, you can take a solid or liquid that is a mix of two or more compounds and purify it into its base components.",
        },

				"subclassfeature10" : {
				name : "Formulaic Alteration",
        source : ["S&S", 136],
        minlevel : 10,        
        description : "\n   " + "Whenever you use an invention or gadget that deals damage, you may choose acid, cold, fire, lightning, necrotic, radiant, or thunder damage.",
        },

				"subclassfeature14" : {
				name : "Delayed Consumption",
        source : ["S&S", 135],
        minlevel : 14,        
        description : "\n   " + "Choose an invention in your research journal that has a target of self or a creature. You infuse a potion with a charge from your Core and drink it, lowering your number of Core charges for the day by one. Any time in the next 8 hours, as a bonus action, you can activate the effect of the chosen invention, even if the effect would normally take longer than a bonus action to activate.",
        recovery : "long rest",
        usages : 1,
        action : ["bonus action", ""]
        },

				"subclassfeature18" : {
				name : "Intense Reactivity",
        source : ["S&S", 103],
        minlevel : 18,        
        description : "\n   " + "After you roll damage for an invention, before you add up the damage, you can choose a number of dice less than or equal to your Intelligence modifier and reroll those dice.",
        },
	}
}  

//Create the Computers subclasses
ClassSubList["computers"] = {
        regExpSearch : /^(?=.*computers).*$/i,
				subname : "Computers",
        source : ["S&S", 136],
				features : {
				
				"subclassfeature2" : {
				name : "Bonus Proficiencies",
        source : ["S&S", 137],
        minlevel : 2,        
				description : "\n   " + "You become proficient with the Computers skill. If you are already proficient in Arcana, choose another Intelligence skill.",
        toolProfs : [["Computers", "Int"]],
        },

				"subclassfeature2.1" : {
				name : "Unique Programming",
        source : ["S&S", 137],
        minlevel : 2,        
        description : "\n   " + "Choose three special programs to add to a personal computer of your choice. If your computer is compromised or destroyed, you can remove the programs from it with 1 minute of coding work and transplant them into another computer at no cost to yourself, but you can only have the programs active on one computer at a time. You add more at 6th and 10th level.",
        },

				"subclassfeature14" : {
				name : "Master Programming",
        source : ["S&S", 139],
        minlevel : 14,        
        description : "\n   " + "Your mastery over code and networks allows you to take your programs to the next level. Choose one master program to add to your personal computer along with your other programs. At 18th level, you choose a second master program from this list and add it to your personal computer.",
        },
	}
} 

//Create the Engineering subclasses
ClassSubList["engineering"] = {
        regExpSearch : /^(?=.*engineering).*$/i,
				subname : "Engineering",
        source : ["S&S", 139],
				features : {
				
				"subclassfeature2" : {
				name : "Bonus Proficiencies",
        source : ["S&S", 140],
        minlevel : 2,        
				description : "\n   " + "You become proficient with medium armor, shields, and Tinker Tools.",
        toolProfs : [["Tinker Tools"]],
        armor : [false, true, false, true],
        },

				"subclassfeature2.1" : {
				name : "Instant Wall",
        source : ["S&S", 140],
        minlevel : 2,        
        description : "\n   " + "As an action, you can touch an inorganic surface within 5 feet of you and create a 1 foot thick, 5’ by 5’ wall of material. The surface your wall is created on must have enough mass to support the new wall, and the new wall is made of the same material as the spot you touched. If the surface can’t support the wall, this ability does nothing.",
        usages : "Int mod per ",
        usagescalc : "event.value = Math.max(1, tDoc.getField(\"Int Mod\").value);",
        recovery : "short rest",
        action : ["action", ""]
        },

        "subclassfeature6" : {
				name : "Deconstruction Expert",
        source : ["S&S", 140],
        minlevel : 6,        
        description : "\n   " + "Damage you deal to objects and cover is doubled. At 18th level, damage you deal to objects and cover is quadrupled instead of doubled.",
        },

				"subclassfeature10" : {
				name : "Murder Holes",
        source : ["S&S", 140],
        minlevel : 10,        
        description : "\n   " + "You and creatures you designate that take cover behind walls you build with the Instant Wall class feature gain a bonus 1d4 to damage rolls and don’t suffer penalties when attacking while having the covered condition.",
        },

				"subclassfeature14" : {
				name : "Debris Shield",
        source : ["S&S", 140],
        minlevel : 14,        
        description : "\n   " + "When you use the Take Cover bonus action to gain the covered condition behind one 5’ by 5’ section of the walls you’ve created with your Instant Wall class feature, you can break apart one section of your wall as part of that bonus action. The broken wall floats around you in pieces, providing you with half cover for as long as you maintain the covered condition at the beginning of your turn.",
        action : ["bonus action", ""]
        },
	}
}  

//Create the Medicine subclasses
ClassSubList["medicine"] = {
        regExpSearch : /^(?=.*medicine).*$/i,
				subname : "Medicine",
        source : ["S&S", 140],
				features : {
				
				"subclassfeature2" : {
				name : "Bonus Proficiencies",
        source : ["S&S", 141],
        minlevel : 2,        
				description : "\n   " + "You become proficient with the artisan's tools (chemistry) and the Arcana skill. If you are already proficient in Arcana, choose another Intelligence skill.",
        toolProfs : [["Herbalism Kit"]],
        skills : ["Medicine"],
        skillstxt : ["\n\n" + toUni("Scientist") + ": Expertise in Medicine."],
        },

				"subclassfeature2.1" : {
				name : "Precise Intellect",
        source : ["S&S", 141],
        minlevel : 2,        
        description : "\n   " + "You get a number of precision dice. You can use them to apply an adrenaline shot, or curative booster.",
        additional : ["", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
        usages : [0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6],
        recovery : "short rest",
        action : ["bonus action", ""]        
        },

        "subclassfeature6" : {
				name : "Tireless Caregiver",
        source : ["S&S", 141],
        minlevel : 6,        
        description : "\n   " + "During a short rest, you may pick up to your Intelligence modifier in creatues who are expending HD and cause them to heal an additional 1d8 HP. This increass to d10 at 10th level and d12 at 18th level.",
        },

				"subclassfeature10" : {
				name : "Expanded Precision",
        source : ["S&S", 141],
        minlevel : 10,        
        description : "\n   " + "You gain Bolstering Infusion and Cleansing Extract as options for your precision dice.",
        },

				"subclassfeature14" : {
				name : "Persistent Cunning",
        source : ["S&S", 141],
        minlevel : 14,        
        description : "\n   " + "When you roll initiative and have no precision dice remaining, you regain 1 precision die.",
        },

				"subclassfeature18" : {
				name : "Greater Precision",
        source : ["S&S", 141],
        minlevel : 18,        
        description : "\n   " + "You gain Rejuvenating Tincture and Reviving Injuection as options for your precision dice.",
        },
	}
}  
