export const primaryDefaults = {
  "sights": {
    "magnifying": ["Magnified A","Magnified B","Magnified C"],
    "nonmagnifying": ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C"],
    "nosight": ["Iron Sight"]
  },
  "barrels": [
    "No Barrel", "Suppressor", "Flash Hider", "Compensator", "Muzzle Brake", "Extended Barrel"],
  "grips": [
    "Vertical Grip", "Angled Grip", "Horizontal Grip"],
  "lasers": [
    "Laser", "No Laser"]
};
export const secondaryDefault = {
  "sights": {
    "nonmagnifying": [
      "Red Dot A","Red Dot B","Red Dot C","Holo A","Holo B","Holo C","Holo D","Reflex A", "Reflex B","Reflex C"],
    "nosight": [
      "Iron Sight"]
  },
  "barrels": [
    "Muzzle Brake", "Suppressor"],
  "lasers": [
    "Laser","No Laser"]
};
export const attackPlaystyles = {
  "playstyles": {
    "playstyle": [
      "Intel / Drone Op","Rush","Slow Push","Support / Utility","Flank / Split Pusher","Site Anchor / Plantholder"]
  }
};
export const defendPlaystyles = {
  "playstyles": {
    "playstyle": [
      "Anchor","Roamer","Intel / Denial","Support", "Runout"
    ]
  }
};
const operatorData = [
  {
    "name": "Sentry",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "Commando 9",
        "overrides": {}
      },
      {
        "name": "m870",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p9",
        "overrides": {}
      },
      {
        "name": "smg-11",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      },
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "deployable_shield",
        "name": "Deployable Shield",
        "side": "defense",
        "amount": 1,
        "description": "Bulletproof shield that's deployed on the ground or attached to doorframes to provide protective cover.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m75 16 181 34 181-33v148l-181 38-181-38Z\"></path><path d=\"m57 181 199 38 199-38v167l-199 38-199-38Z\"></path><path d=\"m47 364 209 38 209-38v94l-209 38-209-38Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__deployable_shield",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__deployable_shield r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/deployable_shield.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/W0WE0X2VQlxwWIAFCJ6Jm/523650a39de5a23dd9520d7299c9e25a/Deployable_Shield.png"
      },
      {
        "slug": "observation_blocker",
        "name": "Observation Blocker",
        "side": "defense",
        "amount": 3,
        "description": "Projects a screen that blocks the line of sight of opponent Observation Tools.",
        "notes": "Maximum width: 5m, height: 2.2m",
        "icon": {
          "svg": {
            "contents": "<path d=\"M45 326V56h422v270h-24V90H69v236Z\"></path><path d=\"m20 368 4-19 45-12 34 16 57-51h14l-51 60 64 30 18 44Zm472 0-4-19-45-12-34 16-57-51h-14l51 60-64 30-18 44ZM16 457v-16h171l25 5 5-10h78l5 10 25-5h171v16Z\"></path><path d=\"M36 442v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm280 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__observation_blocker",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__observation_blocker r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/observation_blocker.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Recruit Attack",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "l85a2",
        "overrides": {}
      },
      {
        "name": "mk_14_ebr",
        "overrides": {}
      },
      {
        "name": "m249",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p12",
        "overrides": {}
      },
      {
        "name": "super_shorty",
        "overrides": {}
      },
      {
        "name": "c75_auto",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      },
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Smoke",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "fmg-9",
        "overrides": {}
      },
      {
        "name": "m590a1",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p226_mk_25",
        "overrides": {}
      },
      {
        "name": "smg-11",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "proximity_alarm",
        "name": "Proximity Alarm",
        "side": "defense",
        "amount": 2,
        "description": "Sensor that sticks to surfaces and sounds an alarm when it detects nearby opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M184 348v100c0 27 144 27 144 0V348Zm46 29h6v75h-6Zm46 0h6v75h-6ZM178 94 92 44C69 31-3 155 20 169l87 50Zm-48 25-3 5-65-37 3-5Zm-23 40-3 5-65-38 3-5Zm299 60 86-50c23-14-49-138-72-125l-87 50Zm2-54-3-5 65-38 3 5Zm-23-40-3-5 65-38 3 5Zm40-81V0M184 348h144l78-129-73-125H178l-71 125Zm-29-136c-12-30 13-74 45-78h113c32 4 57 48 45 78l-57 102c-20 26-70 26-90 0Zm9 1c-11-27 12-67 41-70h102c29 4 51 43 41 70l-51 92c-18 23-63 23-81 0z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__proximity_alarm",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__proximity_alarm r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/proximity_alarm.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TsFLmb2O6LRZpbxzkZDck/c9146913388a9567500b704c95600621/Proximity_alarm.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Mute",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "mp5k",
        "overrides": {}
      },
      {
        "name": "m590a1",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p226_mk_25",
        "overrides": {}
      },
      {
        "name": "smg-11",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "nitro_cell",
        "name": "Nitro Cell",
        "side": "defense",
        "amount": 1,
        "description": "Throwable C4 that sticks to surfaces and is manually detonated to create a large explosion.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M295 16h34v112l3 13v295q0 10-10 10H190q-10 0-10-10V152c0-52 36-86 50-86h53q12 0 12 6Z\"></path><path d=\"m101 53 25-25h157v26h-53c-19 0-62 36-62 98h-67Zm240-28h45l25 25v103h-67v-12l-3-13Zm4 156h66v157h-67Zm-1 185h67v99l-28 31H135l-34-33v-97h67v77q0 15 15 15h146q15 0 15-15ZM101 181h67v159h-67Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__nitro_cell",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__nitro_cell r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/nitro_cell.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pBSTw9U6l9GRnT12G6Xln/e0991bc03b48d217f510af8b611c8828/Nitro_Cell.png"
      },
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Sledge",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "l85a2",
        "overrides": {}
      },
      {
        "name": "m590a1",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p226_mk_25",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "frag_grenade",
        "name": "Frag Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Explosive grenade that detonates shortly after being thrown.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M180 16h102l185 129v174l-24-24V172L338 99l-48 25v30H180Z\"></path><path d=\"M58 320a1 1 0 0 0 352 0 1 1 0 0 0-352 0\"></path><path d=\"M46 304h376v32H46Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__frag_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__frag_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/frag_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4GZsPHbm9H0k5EWz7TMkwO/33b9007bc6ee03dab15cfa15eb69e096/Frag_Grenade.png"
      },
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "impact_emp_grenade",
        "name": "Impact EMP Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging impact grenade that temporarily deactivates nearby opponent electronic devices.",
        "notes": "1.8 meters spherical range, disables electronic gadgets for 9 seconds.",
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__impact_emp_grenade__clip\"><path d=\"M0 100h512v512H0z\"></path></clipPath></defs><path d=\"M74 81q-2-13 0-25C84 3 428 3 438 57q2 12 0 24Z\"></path><path fill-rule=\"evenodd\" d=\"M16 256a1 1 0 0 0 480 0 1 1 0 0 0-480 0m347-132-75 121 55 89-192 110 70-130-41-83Z\" clip-path=\"url(#r6data__impact_emp_grenade__clip)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_emp_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_emp_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/emp_impact_grenade.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Thatcher",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "ar33",
        "overrides": {}
      },
      {
        "name": "l85a2",
        "overrides": {}
      },
      {
        "name": "m590a1",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p226_mk_25",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Castle",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "ump45",
        "overrides": {}
      },
      {
        "name": "m1014",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "5.7_usg",
        "overrides": {}
      },
      {
        "name": "super_shorty",
        "overrides": {}
      },
      {
        "name": "m45_meusoc",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      },
      {
        "slug": "proximity_alarm",
        "name": "Proximity Alarm",
        "side": "defense",
        "amount": 2,
        "description": "Sensor that sticks to surfaces and sounds an alarm when it detects nearby opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M184 348v100c0 27 144 27 144 0V348Zm46 29h6v75h-6Zm46 0h6v75h-6ZM178 94 92 44C69 31-3 155 20 169l87 50Zm-48 25-3 5-65-37 3-5Zm-23 40-3 5-65-38 3-5Zm299 60 86-50c23-14-49-138-72-125l-87 50Zm2-54-3-5 65-38 3 5Zm-23-40-3-5 65-38 3 5Zm40-81V0M184 348h144l78-129-73-125H178l-71 125Zm-29-136c-12-30 13-74 45-78h113c32 4 57 48 45 78l-57 102c-20 26-70 26-90 0Zm9 1c-11-27 12-67 41-70h102c29 4 51 43 41 70l-51 92c-18 23-63 23-81 0z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__proximity_alarm",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__proximity_alarm r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/proximity_alarm.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TsFLmb2O6LRZpbxzkZDck/c9146913388a9567500b704c95600621/Proximity_alarm.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Pulse",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "m1014",
        "overrides": {}
      },
      {
        "name": "ump45",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "m45_meusoc",
        "overrides": {}
      },
      {
        "name": "5.7_usg",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "nitro_cell",
        "name": "Nitro Cell",
        "side": "defense",
        "amount": 1,
        "description": "Throwable C4 that sticks to surfaces and is manually detonated to create a large explosion.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M295 16h34v112l3 13v295q0 10-10 10H190q-10 0-10-10V152c0-52 36-86 50-86h53q12 0 12 6Z\"></path><path d=\"m101 53 25-25h157v26h-53c-19 0-62 36-62 98h-67Zm240-28h45l25 25v103h-67v-12l-3-13Zm4 156h66v157h-67Zm-1 185h67v99l-28 31H135l-34-33v-97h67v77q0 15 15 15h146q15 0 15-15ZM101 181h67v159h-67Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__nitro_cell",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__nitro_cell r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/nitro_cell.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pBSTw9U6l9GRnT12G6Xln/e0991bc03b48d217f510af8b611c8828/Nitro_Cell.png"
      },
      {
        "slug": "deployable_shield",
        "name": "Deployable Shield",
        "side": "defense",
        "amount": 1,
        "description": "Bulletproof shield that's deployed on the ground or attached to doorframes to provide protective cover.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m75 16 181 34 181-33v148l-181 38-181-38Z\"></path><path d=\"m57 181 199 38 199-38v167l-199 38-199-38Z\"></path><path d=\"m47 364 209 38 209-38v94l-209 38-209-38Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__deployable_shield",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__deployable_shield r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/deployable_shield.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/W0WE0X2VQlxwWIAFCJ6Jm/523650a39de5a23dd9520d7299c9e25a/Deployable_Shield.png"
      },
      {
        "slug": "observation_blocker",
        "name": "Observation Blocker",
        "side": "defense",
        "amount": 3,
        "description": "Projects a screen that blocks the line of sight of opponent Observation Tools.",
        "notes": "Maximum width: 5m, height: 2.2m",
        "icon": {
          "svg": {
            "contents": "<path d=\"M45 326V56h422v270h-24V90H69v236Z\"></path><path d=\"m20 368 4-19 45-12 34 16 57-51h14l-51 60 64 30 18 44Zm472 0-4-19-45-12-34 16-57-51h-14l51 60-64 30-18 44ZM16 457v-16h171l25 5 5-10h78l5 10 25-5h171v16Z\"></path><path d=\"M36 442v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm280 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__observation_blocker",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__observation_blocker r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/observation_blocker.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Ash",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "g36c",
        "overrides": {}
      },
      {
        "name": "r4-c",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "5.7_usg",
        "overrides": {}
      },
      {
        "name": "m45_meusoc",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Thermite",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "m1014",
        "overrides": {}
      },
      {
        "name": "556xi",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "m45_meusoc",
        "overrides": {}
      },
      {
        "name": "5.7_usg",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      },
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Doc",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "sg-cqb",
        "overrides": {}
      },
      {
        "name": "mp5",
        "overrides": {}
      },
      {
        "name": "p90",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p9",
        "overrides": {}
      },
      {
        "name": "lfp586",
        "overrides": {}
      },
      {
        "name": "bailiff_410",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      },
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Rook",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "p90",
        "overrides": {}
      },
      {
        "name": "mp5",
        "overrides": {}
      },
      {
        "name": "sg-cqb",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "lfp586",
        "overrides": {}
      },
      {
        "name": "p9",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "proximity_alarm",
        "name": "Proximity Alarm",
        "side": "defense",
        "amount": 2,
        "description": "Sensor that sticks to surfaces and sounds an alarm when it detects nearby opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M184 348v100c0 27 144 27 144 0V348Zm46 29h6v75h-6Zm46 0h6v75h-6ZM178 94 92 44C69 31-3 155 20 169l87 50Zm-48 25-3 5-65-37 3-5Zm-23 40-3 5-65-38 3-5Zm299 60 86-50c23-14-49-138-72-125l-87 50Zm2-54-3-5 65-38 3 5Zm-23-40-3-5 65-38 3 5Zm40-81V0M184 348h144l78-129-73-125H178l-71 125Zm-29-136c-12-30 13-74 45-78h113c32 4 57 48 45 78l-57 102c-20 26-70 26-90 0Zm9 1c-11-27 12-67 41-70h102c29 4 51 43 41 70l-51 92c-18 23-63 23-81 0z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__proximity_alarm",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__proximity_alarm r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/proximity_alarm.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TsFLmb2O6LRZpbxzkZDck/c9146913388a9567500b704c95600621/Proximity_alarm.png"
      },
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      },
      {
        "slug": "observation_blocker",
        "name": "Observation Blocker",
        "side": "defense",
        "amount": 3,
        "description": "Projects a screen that blocks the line of sight of opponent Observation Tools.",
        "notes": "Maximum width: 5m, height: 2.2m",
        "icon": {
          "svg": {
            "contents": "<path d=\"M45 326V56h422v270h-24V90H69v236Z\"></path><path d=\"m20 368 4-19 45-12 34 16 57-51h14l-51 60 64 30 18 44Zm472 0-4-19-45-12-34 16-57-51h-14l51 60-64 30-18 44ZM16 457v-16h171l25 5 5-10h78l5 10 25-5h171v16Z\"></path><path d=\"M36 442v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm280 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__observation_blocker",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__observation_blocker r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/observation_blocker.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Twitch",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "f2",
        "overrides": {}
      },
      {
        "name": "417",
        "overrides": {}
      },
      {
        "name": "sg-cqb",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p9",
        "overrides": {}
      },
      {
        "name": "lfp586",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      },
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Montagne",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "le_roc_shield",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p9",
        "overrides": {}
      },
      {
        "name": "lfp586",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "hard_breach_charge",
        "name": "Hard Breach Charge",
        "side": "attack",
        "amount": 2,
        "description": "Explosive device that automatically detonates to create entryways in breakable and reinforced surfaces.",
        "notes": "Takes 2 seconds to deploy on a wall and 4 seconds to detonate.",
        "icon": {
          "svg": {
            "contents": "<defs><mask id=\"r6data__hard_breach_charge__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M308 104.69q-8-2.5-8-8v-32h-32v24.36q0 7.05-8 7.05\"></path><path fill=\"#000\" d=\"M96 256a1 1 0 0 0 320 0 1 1 0 0 0-320 0\"></path></mask></defs><path fill-rule=\"evenodd\" d=\"M16 140c50-1 104-54 104-104h272c0 50 54 104 104 104v232c-51 0-104 54-104 104H120c0-50-54-104-104-104Z\" mask=\"url(#r6data__hard_breach_charge__mask)\"></path><path fill-rule=\"evenodd\" d=\"M20 80q0-40 40-40h392q40 0 40 40v352q0 40-40 40H60q-40 0-40-40Zm16 0q0-24 24-24h392q24 0 24 24v352q0 24-24 24H60q-24 0-24-24Z\"></path><path d=\"M16 80q0-44 44-44v24q-20 0-20 20Zm480 0q0-44-44-44v24q20 0 20 20Zm0 352q0 44-44 44v-24q20 0 20-20Zm-480 0q0 44 44 44v-24q-20 0-20-20Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__hard_breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__hard_breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/hard_breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3OvnVPWY1UyrDE913kU0a1/eae4b2a1584234ea2ff4ad6481239f3b/SecondaryBreacher.png"
      },
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      },
      {
        "slug": "impact_emp_grenade",
        "name": "Impact EMP Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging impact grenade that temporarily deactivates nearby opponent electronic devices.",
        "notes": "1.8 meters spherical range, disables electronic gadgets for 9 seconds.",
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__impact_emp_grenade__clip\"><path d=\"M0 100h512v512H0z\"></path></clipPath></defs><path d=\"M74 81q-2-13 0-25C84 3 428 3 438 57q2 12 0 24Z\"></path><path fill-rule=\"evenodd\" d=\"M16 256a1 1 0 0 0 480 0 1 1 0 0 0-480 0m347-132-75 121 55 89-192 110 70-130-41-83Z\" clip-path=\"url(#r6data__impact_emp_grenade__clip)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_emp_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_emp_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/emp_impact_grenade.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Kapkan",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "9x19vsn",
        "overrides": {}
      },
      {
        "name": "sasg-12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "pmm",
        "overrides": {}
      },
      {
        "name": "gsh-18",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      },
      {
        "slug": "nitro_cell",
        "name": "Nitro Cell",
        "side": "defense",
        "amount": 1,
        "description": "Throwable C4 that sticks to surfaces and is manually detonated to create a large explosion.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M295 16h34v112l3 13v295q0 10-10 10H190q-10 0-10-10V152c0-52 36-86 50-86h53q12 0 12 6Z\"></path><path d=\"m101 53 25-25h157v26h-53c-19 0-62 36-62 98h-67Zm240-28h45l25 25v103h-67v-12l-3-13Zm4 156h66v157h-67Zm-1 185h67v99l-28 31H135l-34-33v-97h67v77q0 15 15 15h146q15 0 15-15ZM101 181h67v159h-67Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__nitro_cell",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__nitro_cell r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/nitro_cell.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pBSTw9U6l9GRnT12G6Xln/e0991bc03b48d217f510af8b611c8828/Nitro_Cell.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Tachanka",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "dp27",
        "overrides": {}
      },
      {
        "name": "9x19vsn",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "gsh-18",
        "overrides": {}
      },
      {
        "name": "pmm",
        "overrides": {}
      },
      {
        "name": "bearing_9",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "deployable_shield",
        "name": "Deployable Shield",
        "side": "defense",
        "amount": 1,
        "description": "Bulletproof shield that's deployed on the ground or attached to doorframes to provide protective cover.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m75 16 181 34 181-33v148l-181 38-181-38Z\"></path><path d=\"m57 181 199 38 199-38v167l-199 38-199-38Z\"></path><path d=\"m47 364 209 38 209-38v94l-209 38-209-38Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__deployable_shield",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__deployable_shield r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/deployable_shield.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/W0WE0X2VQlxwWIAFCJ6Jm/523650a39de5a23dd9520d7299c9e25a/Deployable_Shield.png"
      },
      {
        "slug": "proximity_alarm",
        "name": "Proximity Alarm",
        "side": "defense",
        "amount": 2,
        "description": "Sensor that sticks to surfaces and sounds an alarm when it detects nearby opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M184 348v100c0 27 144 27 144 0V348Zm46 29h6v75h-6Zm46 0h6v75h-6ZM178 94 92 44C69 31-3 155 20 169l87 50Zm-48 25-3 5-65-37 3-5Zm-23 40-3 5-65-38 3-5Zm299 60 86-50c23-14-49-138-72-125l-87 50Zm2-54-3-5 65-38 3 5Zm-23-40-3-5 65-38 3 5Zm40-81V0M184 348h144l78-129-73-125H178l-71 125Zm-29-136c-12-30 13-74 45-78h113c32 4 57 48 45 78l-57 102c-20 26-70 26-90 0Zm9 1c-11-27 12-67 41-70h102c29 4 51 43 41 70l-51 92c-18 23-63 23-81 0z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__proximity_alarm",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__proximity_alarm r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/proximity_alarm.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TsFLmb2O6LRZpbxzkZDck/c9146913388a9567500b704c95600621/Proximity_alarm.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Glaz",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "ots-03",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "pmm",
        "overrides": {}
      },
      {
        "name": "gonne-6",
        "overrides": {}
      },
      {
        "name": "bearing_9",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      },
      {
        "slug": "frag_grenade",
        "name": "Frag Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Explosive grenade that detonates shortly after being thrown.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M180 16h102l185 129v174l-24-24V172L338 99l-48 25v30H180Z\"></path><path d=\"M58 320a1 1 0 0 0 352 0 1 1 0 0 0-352 0\"></path><path d=\"M46 304h376v32H46Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__frag_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__frag_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/frag_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4GZsPHbm9H0k5EWz7TMkwO/33b9007bc6ee03dab15cfa15eb69e096/Frag_Grenade.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Fuze",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "ballistic_shield",
        "overrides": {}
      },
      {
        "name": "6p41",
        "overrides": {}
      },
      {
        "name": "ak-12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "pmm",
        "overrides": {}
      },
      {
        "name": "gsh-18",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      },
      {
        "slug": "hard_breach_charge",
        "name": "Hard Breach Charge",
        "side": "attack",
        "amount": 2,
        "description": "Explosive device that automatically detonates to create entryways in breakable and reinforced surfaces.",
        "notes": "Takes 2 seconds to deploy on a wall and 4 seconds to detonate.",
        "icon": {
          "svg": {
            "contents": "<defs><mask id=\"r6data__hard_breach_charge__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M308 104.69q-8-2.5-8-8v-32h-32v24.36q0 7.05-8 7.05\"></path><path fill=\"#000\" d=\"M96 256a1 1 0 0 0 320 0 1 1 0 0 0-320 0\"></path></mask></defs><path fill-rule=\"evenodd\" d=\"M16 140c50-1 104-54 104-104h272c0 50 54 104 104 104v232c-51 0-104 54-104 104H120c0-50-54-104-104-104Z\" mask=\"url(#r6data__hard_breach_charge__mask)\"></path><path fill-rule=\"evenodd\" d=\"M20 80q0-40 40-40h392q40 0 40 40v352q0 40-40 40H60q-40 0-40-40Zm16 0q0-24 24-24h392q24 0 24 24v352q0 24-24 24H60q-24 0-24-24Z\"></path><path d=\"M16 80q0-44 44-44v24q-20 0-20 20Zm480 0q0-44-44-44v24q20 0 20 20Zm0 352q0 44-44 44v-24q20 0 20-20Zm-480 0q0 44 44 44v-24q-20 0-20-20Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__hard_breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__hard_breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/hard_breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3OvnVPWY1UyrDE913kU0a1/eae4b2a1584234ea2ff4ad6481239f3b/SecondaryBreacher.png"
      },
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Jäger",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "m870",
        "overrides": {}
      },
      {
        "name": "416-c_carbine",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p12",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      },
      {
        "slug": "observation_blocker",
        "name": "Observation Blocker",
        "side": "defense",
        "amount": 3,
        "description": "Projects a screen that blocks the line of sight of opponent Observation Tools.",
        "notes": "Maximum width: 5m, height: 2.2m",
        "icon": {
          "svg": {
            "contents": "<path d=\"M45 326V56h422v270h-24V90H69v236Z\"></path><path d=\"m20 368 4-19 45-12 34 16 57-51h14l-51 60 64 30 18 44Zm472 0-4-19-45-12-34 16-57-51h-14l51 60-64 30-18 44ZM16 457v-16h171l25 5 5-10h78l5 10 25-5h171v16Z\"></path><path d=\"M36 442v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm280 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__observation_blocker",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__observation_blocker r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/observation_blocker.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Bandit",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "mp7",
        "overrides": {}
      },
      {
        "name": "m870",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p12",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "nitro_cell",
        "name": "Nitro Cell",
        "side": "defense",
        "amount": 1,
        "description": "Throwable C4 that sticks to surfaces and is manually detonated to create a large explosion.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M295 16h34v112l3 13v295q0 10-10 10H190q-10 0-10-10V152c0-52 36-86 50-86h53q12 0 12 6Z\"></path><path d=\"m101 53 25-25h157v26h-53c-19 0-62 36-62 98h-67Zm240-28h45l25 25v103h-67v-12l-3-13Zm4 156h66v157h-67Zm-1 185h67v99l-28 31H135l-34-33v-97h67v77q0 15 15 15h146q15 0 15-15ZM101 181h67v159h-67Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__nitro_cell",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__nitro_cell r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/nitro_cell.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pBSTw9U6l9GRnT12G6Xln/e0991bc03b48d217f510af8b611c8828/Nitro_Cell.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Blitz",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "g52-tactical_shield",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p12",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      },
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "IQ",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "aug_a2",
        "overrides": {}
      },
      {
        "name": "552_commando",
        "overrides": {}
      },
      {
        "name": "g8a1",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p12",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Frost",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "super_90",
        "overrides": {}
      },
      {
        "name": "9mm_c1",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "mk1_9mm",
        "overrides": {}
      },
      {
        "name": "ita12s",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      },
      {
        "slug": "deployable_shield",
        "name": "Deployable Shield",
        "side": "defense",
        "amount": 1,
        "description": "Bulletproof shield that's deployed on the ground or attached to doorframes to provide protective cover.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m75 16 181 34 181-33v148l-181 38-181-38Z\"></path><path d=\"m57 181 199 38 199-38v167l-199 38-199-38Z\"></path><path d=\"m47 364 209 38 209-38v94l-209 38-209-38Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__deployable_shield",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__deployable_shield r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/deployable_shield.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/W0WE0X2VQlxwWIAFCJ6Jm/523650a39de5a23dd9520d7299c9e25a/Deployable_Shield.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Buck",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "c8-sfw",
        "overrides": {}
      },
      {
        "name": "camrs",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "mk1_9mm",
        "overrides": {}
      },
      {
        "name": "gonne-6",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "hard_breach_charge",
        "name": "Hard Breach Charge",
        "side": "attack",
        "amount": 2,
        "description": "Explosive device that automatically detonates to create entryways in breakable and reinforced surfaces.",
        "notes": "Takes 2 seconds to deploy on a wall and 4 seconds to detonate.",
        "icon": {
          "svg": {
            "contents": "<defs><mask id=\"r6data__hard_breach_charge__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M308 104.69q-8-2.5-8-8v-32h-32v24.36q0 7.05-8 7.05\"></path><path fill=\"#000\" d=\"M96 256a1 1 0 0 0 320 0 1 1 0 0 0-320 0\"></path></mask></defs><path fill-rule=\"evenodd\" d=\"M16 140c50-1 104-54 104-104h272c0 50 54 104 104 104v232c-51 0-104 54-104 104H120c0-50-54-104-104-104Z\" mask=\"url(#r6data__hard_breach_charge__mask)\"></path><path fill-rule=\"evenodd\" d=\"M20 80q0-40 40-40h392q40 0 40 40v352q0 40-40 40H60q-40 0-40-40Zm16 0q0-24 24-24h392q24 0 24 24v352q0 24-24 24H60q-24 0-24-24Z\"></path><path d=\"M16 80q0-44 44-44v24q-20 0-20 20Zm480 0q0-44-44-44v24q20 0 20 20Zm0 352q0 44-44 44v-24q20 0 20-20Zm-480 0q0 44 44 44v-24q-20 0-20-20Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__hard_breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__hard_breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/hard_breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3OvnVPWY1UyrDE913kU0a1/eae4b2a1584234ea2ff4ad6481239f3b/SecondaryBreacher.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Valkyrie",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "mpx",
        "overrides": {}
      },
      {
        "name": "spas-12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "d-50",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      },
      {
        "slug": "nitro_cell",
        "name": "Nitro Cell",
        "side": "defense",
        "amount": 1,
        "description": "Throwable C4 that sticks to surfaces and is manually detonated to create a large explosion.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M295 16h34v112l3 13v295q0 10-10 10H190q-10 0-10-10V152c0-52 36-86 50-86h53q12 0 12 6Z\"></path><path d=\"m101 53 25-25h157v26h-53c-19 0-62 36-62 98h-67Zm240-28h45l25 25v103h-67v-12l-3-13Zm4 156h66v157h-67Zm-1 185h67v99l-28 31H135l-34-33v-97h67v77q0 15 15 15h146q15 0 15-15ZM101 181h67v159h-67Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__nitro_cell",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__nitro_cell r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/nitro_cell.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pBSTw9U6l9GRnT12G6Xln/e0991bc03b48d217f510af8b611c8828/Nitro_Cell.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Blackbeard",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "mk17_cqb",
        "overrides": {}
      },
      {
        "name": "sr-25",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "d-50",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      },
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "impact_emp_grenade",
        "name": "Impact EMP Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging impact grenade that temporarily deactivates nearby opponent electronic devices.",
        "notes": "1.8 meters spherical range, disables electronic gadgets for 9 seconds.",
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__impact_emp_grenade__clip\"><path d=\"M0 100h512v512H0z\"></path></clipPath></defs><path d=\"M74 81q-2-13 0-25C84 3 428 3 438 57q2 12 0 24Z\"></path><path fill-rule=\"evenodd\" d=\"M16 256a1 1 0 0 0 480 0 1 1 0 0 0-480 0m347-132-75 121 55 89-192 110 70-130-41-83Z\" clip-path=\"url(#r6data__impact_emp_grenade__clip)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_emp_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_emp_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/emp_impact_grenade.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Caveira",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "m12",
        "overrides": {}
      },
      {
        "name": "spas-15",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "luison",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      },
      {
        "slug": "proximity_alarm",
        "name": "Proximity Alarm",
        "side": "defense",
        "amount": 2,
        "description": "Sensor that sticks to surfaces and sounds an alarm when it detects nearby opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M184 348v100c0 27 144 27 144 0V348Zm46 29h6v75h-6Zm46 0h6v75h-6ZM178 94 92 44C69 31-3 155 20 169l87 50Zm-48 25-3 5-65-37 3-5Zm-23 40-3 5-65-38 3-5Zm299 60 86-50c23-14-49-138-72-125l-87 50Zm2-54-3-5 65-38 3 5Zm-23-40-3-5 65-38 3 5Zm40-81V0M184 348h144l78-129-73-125H178l-71 125Zm-29-136c-12-30 13-74 45-78h113c32 4 57 48 45 78l-57 102c-20 26-70 26-90 0Zm9 1c-11-27 12-67 41-70h102c29 4 51 43 41 70l-51 92c-18 23-63 23-81 0z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__proximity_alarm",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__proximity_alarm r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/proximity_alarm.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TsFLmb2O6LRZpbxzkZDck/c9146913388a9567500b704c95600621/Proximity_alarm.png"
      },
      {
        "slug": "observation_blocker",
        "name": "Observation Blocker",
        "side": "defense",
        "amount": 3,
        "description": "Projects a screen that blocks the line of sight of opponent Observation Tools.",
        "notes": "Maximum width: 5m, height: 2.2m",
        "icon": {
          "svg": {
            "contents": "<path d=\"M45 326V56h422v270h-24V90H69v236Z\"></path><path d=\"m20 368 4-19 45-12 34 16 57-51h14l-51 60 64 30 18 44Zm472 0-4-19-45-12-34 16-57-51h-14l51 60-64 30-18 44ZM16 457v-16h171l25 5 5-10h78l5 10 25-5h171v16Z\"></path><path d=\"M36 442v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm280 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__observation_blocker",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__observation_blocker r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/observation_blocker.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Capitão",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "para-308",
        "overrides": {}
      },
      {
        "name": "m249",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "prb92",
        "overrides": {}
      },
      {
        "name": "gonne-6",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      },
      {
        "slug": "hard_breach_charge",
        "name": "Hard Breach Charge",
        "side": "attack",
        "amount": 2,
        "description": "Explosive device that automatically detonates to create entryways in breakable and reinforced surfaces.",
        "notes": "Takes 2 seconds to deploy on a wall and 4 seconds to detonate.",
        "icon": {
          "svg": {
            "contents": "<defs><mask id=\"r6data__hard_breach_charge__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M308 104.69q-8-2.5-8-8v-32h-32v24.36q0 7.05-8 7.05\"></path><path fill=\"#000\" d=\"M96 256a1 1 0 0 0 320 0 1 1 0 0 0-320 0\"></path></mask></defs><path fill-rule=\"evenodd\" d=\"M16 140c50-1 104-54 104-104h272c0 50 54 104 104 104v232c-51 0-104 54-104 104H120c0-50-54-104-104-104Z\" mask=\"url(#r6data__hard_breach_charge__mask)\"></path><path fill-rule=\"evenodd\" d=\"M20 80q0-40 40-40h392q40 0 40 40v352q0 40-40 40H60q-40 0-40-40Zm16 0q0-24 24-24h392q24 0 24 24v352q0 24-24 24H60q-24 0-24-24Z\"></path><path d=\"M16 80q0-44 44-44v24q-20 0-20 20Zm480 0q0-44-44-44v24q20 0 20 20Zm0 352q0 44-44 44v-24q20 0 20-20Zm-480 0q0 44 44 44v-24q-20 0-20-20Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__hard_breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__hard_breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/hard_breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3OvnVPWY1UyrDE913kU0a1/eae4b2a1584234ea2ff4ad6481239f3b/SecondaryBreacher.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Echo",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "supernova",
        "overrides": {}
      },
      {
        "name": "mp5sd",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p229",
        "overrides": {}
      },
      {
        "name": "bearing_9",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      },
      {
        "slug": "deployable_shield",
        "name": "Deployable Shield",
        "side": "defense",
        "amount": 1,
        "description": "Bulletproof shield that's deployed on the ground or attached to doorframes to provide protective cover.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m75 16 181 34 181-33v148l-181 38-181-38Z\"></path><path d=\"m57 181 199 38 199-38v167l-199 38-199-38Z\"></path><path d=\"m47 364 209 38 209-38v94l-209 38-209-38Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__deployable_shield",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__deployable_shield r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/deployable_shield.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/W0WE0X2VQlxwWIAFCJ6Jm/523650a39de5a23dd9520d7299c9e25a/Deployable_Shield.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Hibana",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "type-89",
        "overrides": {}
      },
      {
        "name": "supernova",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p229",
        "overrides": {}
      },
      {
        "name": "bearing_9",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Mira",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "vector_.45_acp",
        "overrides": {}
      },
      {
        "name": "ita12l",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "usp40",
        "overrides": {}
      },
      {
        "name": "ita12s",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "proximity_alarm",
        "name": "Proximity Alarm",
        "side": "defense",
        "amount": 2,
        "description": "Sensor that sticks to surfaces and sounds an alarm when it detects nearby opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M184 348v100c0 27 144 27 144 0V348Zm46 29h6v75h-6Zm46 0h6v75h-6ZM178 94 92 44C69 31-3 155 20 169l87 50Zm-48 25-3 5-65-37 3-5Zm-23 40-3 5-65-38 3-5Zm299 60 86-50c23-14-49-138-72-125l-87 50Zm2-54-3-5 65-38 3 5Zm-23-40-3-5 65-38 3 5Zm40-81V0M184 348h144l78-129-73-125H178l-71 125Zm-29-136c-12-30 13-74 45-78h113c32 4 57 48 45 78l-57 102c-20 26-70 26-90 0Zm9 1c-11-27 12-67 41-70h102c29 4 51 43 41 70l-51 92c-18 23-63 23-81 0z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__proximity_alarm",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__proximity_alarm r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/proximity_alarm.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TsFLmb2O6LRZpbxzkZDck/c9146913388a9567500b704c95600621/Proximity_alarm.png"
      },
      {
        "slug": "nitro_cell",
        "name": "Nitro Cell",
        "side": "defense",
        "amount": 1,
        "description": "Throwable C4 that sticks to surfaces and is manually detonated to create a large explosion.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M295 16h34v112l3 13v295q0 10-10 10H190q-10 0-10-10V152c0-52 36-86 50-86h53q12 0 12 6Z\"></path><path d=\"m101 53 25-25h157v26h-53c-19 0-62 36-62 98h-67Zm240-28h45l25 25v103h-67v-12l-3-13Zm4 156h66v157h-67Zm-1 185h67v99l-28 31H135l-34-33v-97h67v77q0 15 15 15h146q15 0 15-15ZM101 181h67v159h-67Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__nitro_cell",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__nitro_cell r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/nitro_cell.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pBSTw9U6l9GRnT12G6Xln/e0991bc03b48d217f510af8b611c8828/Nitro_Cell.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Jackal",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "c7e",
        "overrides": {}
      },
      {
        "name": "pdw9",
        "overrides": {}
      },
      {
        "name": "ita12l",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "usp40",
        "overrides": {}
      },
      {
        "name": "ita12s",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      },
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Lesion",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "six12_sd",
        "overrides": {}
      },
      {
        "name": "t-5_smg",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "q-929",
        "overrides": {}
      },
      {
        "name": "super_shorty",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      },
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Ying",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "t-95_lsw",
        "overrides": {}
      },
      {
        "name": "six12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "q-929",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "hard_breach_charge",
        "name": "Hard Breach Charge",
        "side": "attack",
        "amount": 2,
        "description": "Explosive device that automatically detonates to create entryways in breakable and reinforced surfaces.",
        "notes": "Takes 2 seconds to deploy on a wall and 4 seconds to detonate.",
        "icon": {
          "svg": {
            "contents": "<defs><mask id=\"r6data__hard_breach_charge__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M308 104.69q-8-2.5-8-8v-32h-32v24.36q0 7.05-8 7.05\"></path><path fill=\"#000\" d=\"M96 256a1 1 0 0 0 320 0 1 1 0 0 0-320 0\"></path></mask></defs><path fill-rule=\"evenodd\" d=\"M16 140c50-1 104-54 104-104h272c0 50 54 104 104 104v232c-51 0-104 54-104 104H120c0-50-54-104-104-104Z\" mask=\"url(#r6data__hard_breach_charge__mask)\"></path><path fill-rule=\"evenodd\" d=\"M20 80q0-40 40-40h392q40 0 40 40v352q0 40-40 40H60q-40 0-40-40Zm16 0q0-24 24-24h392q24 0 24 24v352q0 24-24 24H60q-24 0-24-24Z\"></path><path d=\"M16 80q0-44 44-44v24q-20 0-20 20Zm480 0q0-44-44-44v24q20 0 20 20Zm0 352q0 44-44 44v-24q20 0 20-20Zm-480 0q0 44 44 44v-24q-20 0-20-20Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__hard_breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__hard_breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/hard_breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3OvnVPWY1UyrDE913kU0a1/eae4b2a1584234ea2ff4ad6481239f3b/SecondaryBreacher.png"
      },
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Ela",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "scorpion_evo_3_a1",
        "overrides": {}
      },
      {
        "name": "fo-12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "rg15",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "deployable_shield",
        "name": "Deployable Shield",
        "side": "defense",
        "amount": 1,
        "description": "Bulletproof shield that's deployed on the ground or attached to doorframes to provide protective cover.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m75 16 181 34 181-33v148l-181 38-181-38Z\"></path><path d=\"m57 181 199 38 199-38v167l-199 38-199-38Z\"></path><path d=\"m47 364 209 38 209-38v94l-209 38-209-38Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__deployable_shield",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__deployable_shield r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/deployable_shield.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/W0WE0X2VQlxwWIAFCJ6Jm/523650a39de5a23dd9520d7299c9e25a/Deployable_Shield.png"
      },
      {
        "slug": "observation_blocker",
        "name": "Observation Blocker",
        "side": "defense",
        "amount": 3,
        "description": "Projects a screen that blocks the line of sight of opponent Observation Tools.",
        "notes": "Maximum width: 5m, height: 2.2m",
        "icon": {
          "svg": {
            "contents": "<path d=\"M45 326V56h422v270h-24V90H69v236Z\"></path><path d=\"m20 368 4-19 45-12 34 16 57-51h14l-51 60 64 30 18 44Zm472 0-4-19-45-12-34 16-57-51h-14l51 60-64 30-18 44ZM16 457v-16h171l25 5 5-10h78l5 10 25-5h171v16Z\"></path><path d=\"M36 442v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm280 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__observation_blocker",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__observation_blocker r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/observation_blocker.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Zofia",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "lmg-e",
        "overrides": {}
      },
      {
        "name": "m762",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "rg15",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Vigil",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "k1a",
        "overrides": {}
      },
      {
        "name": "bosg.12.2",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "c75_auto",
        "overrides": {}
      },
      {
        "name": "smg-12",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      },
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Dokkaebi",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "mk_14_ebr",
        "overrides": {}
      },
      {
        "name": "bosg.12.2",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "smg-12",
        "overrides": {}
      },
      {
        "name": "c75_auto",
        "overrides": {}
      },
      {
        "name": "gonne-6",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      },
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "impact_emp_grenade",
        "name": "Impact EMP Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging impact grenade that temporarily deactivates nearby opponent electronic devices.",
        "notes": "1.8 meters spherical range, disables electronic gadgets for 9 seconds.",
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__impact_emp_grenade__clip\"><path d=\"M0 100h512v512H0z\"></path></clipPath></defs><path d=\"M74 81q-2-13 0-25C84 3 428 3 438 57q2 12 0 24Z\"></path><path fill-rule=\"evenodd\" d=\"M16 256a1 1 0 0 0 480 0 1 1 0 0 0-480 0m347-132-75 121 55 89-192 110 70-130-41-83Z\" clip-path=\"url(#r6data__impact_emp_grenade__clip)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_emp_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_emp_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/emp_impact_grenade.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Lion",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "v308",
        "overrides": {}
      },
      {
        "name": "417",
        "overrides": {}
      },
      {
        "name": "sg-cqb",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "lfp586",
        "overrides": {}
      },
      {
        "name": "p9",
        "overrides": {}
      },
      {
        "name": "gonne-6",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      },
      {
        "slug": "impact_emp_grenade",
        "name": "Impact EMP Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging impact grenade that temporarily deactivates nearby opponent electronic devices.",
        "notes": "1.8 meters spherical range, disables electronic gadgets for 9 seconds.",
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__impact_emp_grenade__clip\"><path d=\"M0 100h512v512H0z\"></path></clipPath></defs><path d=\"M74 81q-2-13 0-25C84 3 428 3 438 57q2 12 0 24Z\"></path><path fill-rule=\"evenodd\" d=\"M16 256a1 1 0 0 0 480 0 1 1 0 0 0-480 0m347-132-75 121 55 89-192 110 70-130-41-83Z\" clip-path=\"url(#r6data__impact_emp_grenade__clip)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_emp_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_emp_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/emp_impact_grenade.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Finka",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "spear_.308",
        "overrides": {}
      },
      {
        "name": "6p41",
        "overrides": {}
      },
      {
        "name": "sasg-12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "pmm",
        "overrides": {}
      },
      {
        "name": "gsh-18",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      },
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "frag_grenade",
        "name": "Frag Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Explosive grenade that detonates shortly after being thrown.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M180 16h102l185 129v174l-24-24V172L338 99l-48 25v30H180Z\"></path><path d=\"M58 320a1 1 0 0 0 352 0 1 1 0 0 0-352 0\"></path><path d=\"M46 304h376v32H46Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__frag_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__frag_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/frag_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4GZsPHbm9H0k5EWz7TMkwO/33b9007bc6ee03dab15cfa15eb69e096/Frag_Grenade.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Maestro",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "alda_5.56",
        "overrides": {}
      },
      {
        "name": "acs12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "bailiff_410",
        "overrides": {}
      },
      {
        "name": "keratos_.357",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      },
      {
        "slug": "observation_blocker",
        "name": "Observation Blocker",
        "side": "defense",
        "amount": 3,
        "description": "Projects a screen that blocks the line of sight of opponent Observation Tools.",
        "notes": "Maximum width: 5m, height: 2.2m",
        "icon": {
          "svg": {
            "contents": "<path d=\"M45 326V56h422v270h-24V90H69v236Z\"></path><path d=\"m20 368 4-19 45-12 34 16 57-51h14l-51 60 64 30 18 44Zm472 0-4-19-45-12-34 16-57-51h-14l51 60-64 30-18 44ZM16 457v-16h171l25 5 5-10h78l5 10 25-5h171v16Z\"></path><path d=\"M36 442v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm280 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__observation_blocker",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__observation_blocker r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/observation_blocker.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Alibi",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "mx4_storm",
        "overrides": {}
      },
      {
        "name": "acs12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "keratos_.357",
        "overrides": {}
      },
      {
        "name": "bailiff_410",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "proximity_alarm",
        "name": "Proximity Alarm",
        "side": "defense",
        "amount": 2,
        "description": "Sensor that sticks to surfaces and sounds an alarm when it detects nearby opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M184 348v100c0 27 144 27 144 0V348Zm46 29h6v75h-6Zm46 0h6v75h-6ZM178 94 92 44C69 31-3 155 20 169l87 50Zm-48 25-3 5-65-37 3-5Zm-23 40-3 5-65-38 3-5Zm299 60 86-50c23-14-49-138-72-125l-87 50Zm2-54-3-5 65-38 3 5Zm-23-40-3-5 65-38 3 5Zm40-81V0M184 348h144l78-129-73-125H178l-71 125Zm-29-136c-12-30 13-74 45-78h113c32 4 57 48 45 78l-57 102c-20 26-70 26-90 0Zm9 1c-11-27 12-67 41-70h102c29 4 51 43 41 70l-51 92c-18 23-63 23-81 0z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__proximity_alarm",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__proximity_alarm r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/proximity_alarm.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TsFLmb2O6LRZpbxzkZDck/c9146913388a9567500b704c95600621/Proximity_alarm.png"
      },
      {
        "slug": "observation_blocker",
        "name": "Observation Blocker",
        "side": "defense",
        "amount": 3,
        "description": "Projects a screen that blocks the line of sight of opponent Observation Tools.",
        "notes": "Maximum width: 5m, height: 2.2m",
        "icon": {
          "svg": {
            "contents": "<path d=\"M45 326V56h422v270h-24V90H69v236Z\"></path><path d=\"m20 368 4-19 45-12 34 16 57-51h14l-51 60 64 30 18 44Zm472 0-4-19-45-12-34 16-57-51h-14l51 60-64 30-18 44ZM16 457v-16h171l25 5 5-10h78l5 10 25-5h171v16Z\"></path><path d=\"M36 442v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm280 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__observation_blocker",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__observation_blocker r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/observation_blocker.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Clash",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "cce_shield",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "super_shorty",
        "overrides": {}
      },
      {
        "name": "spsmg9",
        "overrides": {}
      },
      {
        "name": "p-10c",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      },
      {
        "slug": "deployable_shield",
        "name": "Deployable Shield",
        "side": "defense",
        "amount": 1,
        "description": "Bulletproof shield that's deployed on the ground or attached to doorframes to provide protective cover.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m75 16 181 34 181-33v148l-181 38-181-38Z\"></path><path d=\"m57 181 199 38 199-38v167l-199 38-199-38Z\"></path><path d=\"m47 364 209 38 209-38v94l-209 38-209-38Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__deployable_shield",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__deployable_shield r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/deployable_shield.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/W0WE0X2VQlxwWIAFCJ6Jm/523650a39de5a23dd9520d7299c9e25a/Deployable_Shield.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Maverick",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "ar-15.50",
        "overrides": {}
      },
      {
        "name": "m4",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "1911_tacops",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Kaid",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "aug_a3",
        "overrides": {}
      },
      {
        "name": "tcsg12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": ".44_mag_semi-auto",
        "overrides": {}
      },
      {
        "name": "lfp586",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "nitro_cell",
        "name": "Nitro Cell",
        "side": "defense",
        "amount": 1,
        "description": "Throwable C4 that sticks to surfaces and is manually detonated to create a large explosion.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M295 16h34v112l3 13v295q0 10-10 10H190q-10 0-10-10V152c0-52 36-86 50-86h53q12 0 12 6Z\"></path><path d=\"m101 53 25-25h157v26h-53c-19 0-62 36-62 98h-67Zm240-28h45l25 25v103h-67v-12l-3-13Zm4 156h66v157h-67Zm-1 185h67v99l-28 31H135l-34-33v-97h67v77q0 15 15 15h146q15 0 15-15ZM101 181h67v159h-67Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__nitro_cell",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__nitro_cell r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/nitro_cell.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pBSTw9U6l9GRnT12G6Xln/e0991bc03b48d217f510af8b611c8828/Nitro_Cell.png"
      },
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "observation_blocker",
        "name": "Observation Blocker",
        "side": "defense",
        "amount": 3,
        "description": "Projects a screen that blocks the line of sight of opponent Observation Tools.",
        "notes": "Maximum width: 5m, height: 2.2m",
        "icon": {
          "svg": {
            "contents": "<path d=\"M45 326V56h422v270h-24V90H69v236Z\"></path><path d=\"m20 368 4-19 45-12 34 16 57-51h14l-51 60 64 30 18 44Zm472 0-4-19-45-12-34 16-57-51h-14l51 60-64 30-18 44ZM16 457v-16h171l25 5 5-10h78l5 10 25-5h171v16Z\"></path><path d=\"M36 442v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm280 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__observation_blocker",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__observation_blocker r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/observation_blocker.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Nomad",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "ak-74m",
        "overrides": {}
      },
      {
        "name": "arx200",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": ".44_mag_semi-auto",
        "overrides": {}
      },
      {
        "name": "prb92",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Mozzie",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "commando_9",
        "overrides": {}
      },
      {
        "name": "p10_roni",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "sdp_9mm",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "nitro_cell",
        "name": "Nitro Cell",
        "side": "defense",
        "amount": 1,
        "description": "Throwable C4 that sticks to surfaces and is manually detonated to create a large explosion.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M295 16h34v112l3 13v295q0 10-10 10H190q-10 0-10-10V152c0-52 36-86 50-86h53q12 0 12 6Z\"></path><path d=\"m101 53 25-25h157v26h-53c-19 0-62 36-62 98h-67Zm240-28h45l25 25v103h-67v-12l-3-13Zm4 156h66v157h-67Zm-1 185h67v99l-28 31H135l-34-33v-97h67v77q0 15 15 15h146q15 0 15-15ZM101 181h67v159h-67Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__nitro_cell",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__nitro_cell r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/nitro_cell.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pBSTw9U6l9GRnT12G6Xln/e0991bc03b48d217f510af8b611c8828/Nitro_Cell.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Gridlock",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "f90",
        "overrides": {}
      },
      {
        "name": "m249_saw",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "super_shorty",
        "overrides": {}
      },
      {
        "name": "sdp_9mm",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      },
      {
        "slug": "impact_emp_grenade",
        "name": "Impact EMP Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging impact grenade that temporarily deactivates nearby opponent electronic devices.",
        "notes": "1.8 meters spherical range, disables electronic gadgets for 9 seconds.",
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__impact_emp_grenade__clip\"><path d=\"M0 100h512v512H0z\"></path></clipPath></defs><path d=\"M74 81q-2-13 0-25C84 3 428 3 438 57q2 12 0 24Z\"></path><path fill-rule=\"evenodd\" d=\"M16 256a1 1 0 0 0 480 0 1 1 0 0 0-480 0m347-132-75 121 55 89-192 110 70-130-41-83Z\" clip-path=\"url(#r6data__impact_emp_grenade__clip)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_emp_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_emp_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/emp_impact_grenade.png"
        },
        "iconOfficial": null
      },
      {
        "slug": "frag_grenade",
        "name": "Frag Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Explosive grenade that detonates shortly after being thrown.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M180 16h102l185 129v174l-24-24V172L338 99l-48 25v30H180Z\"></path><path d=\"M58 320a1 1 0 0 0 352 0 1 1 0 0 0-352 0\"></path><path d=\"M46 304h376v32H46Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__frag_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__frag_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/frag_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4GZsPHbm9H0k5EWz7TMkwO/33b9007bc6ee03dab15cfa15eb69e096/Frag_Grenade.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Warden",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "m590a1",
        "overrides": {}
      },
      {
        "name": "mpx",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p-10c",
        "overrides": {}
      },
      {
        "name": "smg-12",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "deployable_shield",
        "name": "Deployable Shield",
        "side": "defense",
        "amount": 1,
        "description": "Bulletproof shield that's deployed on the ground or attached to doorframes to provide protective cover.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m75 16 181 34 181-33v148l-181 38-181-38Z\"></path><path d=\"m57 181 199 38 199-38v167l-199 38-199-38Z\"></path><path d=\"m47 364 209 38 209-38v94l-209 38-209-38Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__deployable_shield",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__deployable_shield r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/deployable_shield.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/W0WE0X2VQlxwWIAFCJ6Jm/523650a39de5a23dd9520d7299c9e25a/Deployable_Shield.png"
      },
      {
        "slug": "nitro_cell",
        "name": "Nitro Cell",
        "side": "defense",
        "amount": 1,
        "description": "Throwable C4 that sticks to surfaces and is manually detonated to create a large explosion.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M295 16h34v112l3 13v295q0 10-10 10H190q-10 0-10-10V152c0-52 36-86 50-86h53q12 0 12 6Z\"></path><path d=\"m101 53 25-25h157v26h-53c-19 0-62 36-62 98h-67Zm240-28h45l25 25v103h-67v-12l-3-13Zm4 156h66v157h-67Zm-1 185h67v99l-28 31H135l-34-33v-97h67v77q0 15 15 15h146q15 0 15-15ZM101 181h67v159h-67Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__nitro_cell",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__nitro_cell r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/nitro_cell.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pBSTw9U6l9GRnT12G6Xln/e0991bc03b48d217f510af8b611c8828/Nitro_Cell.png"
      },
      {
        "slug": "observation_blocker",
        "name": "Observation Blocker",
        "side": "defense",
        "amount": 3,
        "description": "Projects a screen that blocks the line of sight of opponent Observation Tools.",
        "notes": "Maximum width: 5m, height: 2.2m",
        "icon": {
          "svg": {
            "contents": "<path d=\"M45 326V56h422v270h-24V90H69v236Z\"></path><path d=\"m20 368 4-19 45-12 34 16 57-51h14l-51 60 64 30 18 44Zm472 0-4-19-45-12-34 16-57-51h-14l51 60-64 30-18 44ZM16 457v-16h171l25 5 5-10h78l5 10 25-5h171v16Z\"></path><path d=\"M36 442v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm280 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Zm36 0v-7c0-12 16-12 16 0v7Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__observation_blocker",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__observation_blocker r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/observation_blocker.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Nøkk",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "fmg-9",
        "overrides": {}
      },
      {
        "name": "six12_sd",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "5.7_usg",
        "overrides": {}
      },
      {
        "name": "d-50",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "frag_grenade",
        "name": "Frag Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Explosive grenade that detonates shortly after being thrown.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M180 16h102l185 129v174l-24-24V172L338 99l-48 25v30H180Z\"></path><path d=\"M58 320a1 1 0 0 0 352 0 1 1 0 0 0-352 0\"></path><path d=\"M46 304h376v32H46Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__frag_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__frag_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/frag_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4GZsPHbm9H0k5EWz7TMkwO/33b9007bc6ee03dab15cfa15eb69e096/Frag_Grenade.png"
      },
      {
        "slug": "hard_breach_charge",
        "name": "Hard Breach Charge",
        "side": "attack",
        "amount": 2,
        "description": "Explosive device that automatically detonates to create entryways in breakable and reinforced surfaces.",
        "notes": "Takes 2 seconds to deploy on a wall and 4 seconds to detonate.",
        "icon": {
          "svg": {
            "contents": "<defs><mask id=\"r6data__hard_breach_charge__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M308 104.69q-8-2.5-8-8v-32h-32v24.36q0 7.05-8 7.05\"></path><path fill=\"#000\" d=\"M96 256a1 1 0 0 0 320 0 1 1 0 0 0-320 0\"></path></mask></defs><path fill-rule=\"evenodd\" d=\"M16 140c50-1 104-54 104-104h272c0 50 54 104 104 104v232c-51 0-104 54-104 104H120c0-50-54-104-104-104Z\" mask=\"url(#r6data__hard_breach_charge__mask)\"></path><path fill-rule=\"evenodd\" d=\"M20 80q0-40 40-40h392q40 0 40 40v352q0 40-40 40H60q-40 0-40-40Zm16 0q0-24 24-24h392q24 0 24 24v352q0 24-24 24H60q-24 0-24-24Z\"></path><path d=\"M16 80q0-44 44-44v24q-20 0-20 20Zm480 0q0-44-44-44v24q20 0 20 20Zm0 352q0 44-44 44v-24q20 0 20-20Zm-480 0q0 44 44 44v-24q-20 0-20-20Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__hard_breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__hard_breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/hard_breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3OvnVPWY1UyrDE913kU0a1/eae4b2a1584234ea2ff4ad6481239f3b/SecondaryBreacher.png"
      },
      {
        "slug": "impact_emp_grenade",
        "name": "Impact EMP Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging impact grenade that temporarily deactivates nearby opponent electronic devices.",
        "notes": "1.8 meters spherical range, disables electronic gadgets for 9 seconds.",
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__impact_emp_grenade__clip\"><path d=\"M0 100h512v512H0z\"></path></clipPath></defs><path d=\"M74 81q-2-13 0-25C84 3 428 3 438 57q2 12 0 24Z\"></path><path fill-rule=\"evenodd\" d=\"M16 256a1 1 0 0 0 480 0 1 1 0 0 0-480 0m347-132-75 121 55 89-192 110 70-130-41-83Z\" clip-path=\"url(#r6data__impact_emp_grenade__clip)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_emp_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_emp_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/emp_impact_grenade.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Goyo",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "vector_.45_acp",
        "overrides": {}
      },
      {
        "name": "tcsg12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p229",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "proximity_alarm",
        "name": "Proximity Alarm",
        "side": "defense",
        "amount": 2,
        "description": "Sensor that sticks to surfaces and sounds an alarm when it detects nearby opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M184 348v100c0 27 144 27 144 0V348Zm46 29h6v75h-6Zm46 0h6v75h-6ZM178 94 92 44C69 31-3 155 20 169l87 50Zm-48 25-3 5-65-37 3-5Zm-23 40-3 5-65-38 3-5Zm299 60 86-50c23-14-49-138-72-125l-87 50Zm2-54-3-5 65-38 3 5Zm-23-40-3-5 65-38 3 5Zm40-81V0M184 348h144l78-129-73-125H178l-71 125Zm-29-136c-12-30 13-74 45-78h113c32 4 57 48 45 78l-57 102c-20 26-70 26-90 0Zm9 1c-11-27 12-67 41-70h102c29 4 51 43 41 70l-51 92c-18 23-63 23-81 0z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__proximity_alarm",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__proximity_alarm r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/proximity_alarm.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TsFLmb2O6LRZpbxzkZDck/c9146913388a9567500b704c95600621/Proximity_alarm.png"
      },
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      },
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Amaru",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "g8a1",
        "overrides": {}
      },
      {
        "name": "supernova",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "smg-11",
        "overrides": {}
      },
      {
        "name": "ita12s",
        "overrides": {}
      },
      {
        "name": "gonne-6",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "hard_breach_charge",
        "name": "Hard Breach Charge",
        "side": "attack",
        "amount": 2,
        "description": "Explosive device that automatically detonates to create entryways in breakable and reinforced surfaces.",
        "notes": "Takes 2 seconds to deploy on a wall and 4 seconds to detonate.",
        "icon": {
          "svg": {
            "contents": "<defs><mask id=\"r6data__hard_breach_charge__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M308 104.69q-8-2.5-8-8v-32h-32v24.36q0 7.05-8 7.05\"></path><path fill=\"#000\" d=\"M96 256a1 1 0 0 0 320 0 1 1 0 0 0-320 0\"></path></mask></defs><path fill-rule=\"evenodd\" d=\"M16 140c50-1 104-54 104-104h272c0 50 54 104 104 104v232c-51 0-104 54-104 104H120c0-50-54-104-104-104Z\" mask=\"url(#r6data__hard_breach_charge__mask)\"></path><path fill-rule=\"evenodd\" d=\"M20 80q0-40 40-40h392q40 0 40 40v352q0 40-40 40H60q-40 0-40-40Zm16 0q0-24 24-24h392q24 0 24 24v352q0 24-24 24H60q-24 0-24-24Z\"></path><path d=\"M16 80q0-44 44-44v24q-20 0-20 20Zm480 0q0-44-44-44v24q20 0 20 20Zm0 352q0 44-44 44v-24q20 0 20-20Zm-480 0q0 44 44 44v-24q-20 0-20-20Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__hard_breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__hard_breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/hard_breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3OvnVPWY1UyrDE913kU0a1/eae4b2a1584234ea2ff4ad6481239f3b/SecondaryBreacher.png"
      },
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Wamai",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "aug_a2",
        "overrides": {}
      },
      {
        "name": "mp5k",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "keratos_.357",
        "overrides": {}
      },
      {
        "name": "p12",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      },
      {
        "slug": "proximity_alarm",
        "name": "Proximity Alarm",
        "side": "defense",
        "amount": 2,
        "description": "Sensor that sticks to surfaces and sounds an alarm when it detects nearby opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M184 348v100c0 27 144 27 144 0V348Zm46 29h6v75h-6Zm46 0h6v75h-6ZM178 94 92 44C69 31-3 155 20 169l87 50Zm-48 25-3 5-65-37 3-5Zm-23 40-3 5-65-38 3-5Zm299 60 86-50c23-14-49-138-72-125l-87 50Zm2-54-3-5 65-38 3 5Zm-23-40-3-5 65-38 3 5Zm40-81V0M184 348h144l78-129-73-125H178l-71 125Zm-29-136c-12-30 13-74 45-78h113c32 4 57 48 45 78l-57 102c-20 26-70 26-90 0Zm9 1c-11-27 12-67 41-70h102c29 4 51 43 41 70l-51 92c-18 23-63 23-81 0z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__proximity_alarm",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__proximity_alarm r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/proximity_alarm.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TsFLmb2O6LRZpbxzkZDck/c9146913388a9567500b704c95600621/Proximity_alarm.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Kali",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "csrx_300",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "spsmg9",
        "overrides": {}
      },
      {
        "name": "c75_auto",
        "overrides": {}
      },
      {
        "name": "p226_mk_25",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      },
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Oryx",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "t-5_smg",
        "overrides": {}
      },
      {
        "name": "spas-12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "bailiff_410",
        "overrides": {}
      },
      {
        "name": "usp40",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "proximity_alarm",
        "name": "Proximity Alarm",
        "side": "defense",
        "amount": 2,
        "description": "Sensor that sticks to surfaces and sounds an alarm when it detects nearby opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M184 348v100c0 27 144 27 144 0V348Zm46 29h6v75h-6Zm46 0h6v75h-6ZM178 94 92 44C69 31-3 155 20 169l87 50Zm-48 25-3 5-65-37 3-5Zm-23 40-3 5-65-38 3-5Zm299 60 86-50c23-14-49-138-72-125l-87 50Zm2-54-3-5 65-38 3 5Zm-23-40-3-5 65-38 3 5Zm40-81V0M184 348h144l78-129-73-125H178l-71 125Zm-29-136c-12-30 13-74 45-78h113c32 4 57 48 45 78l-57 102c-20 26-70 26-90 0Zm9 1c-11-27 12-67 41-70h102c29 4 51 43 41 70l-51 92c-18 23-63 23-81 0z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__proximity_alarm",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__proximity_alarm r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/proximity_alarm.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TsFLmb2O6LRZpbxzkZDck/c9146913388a9567500b704c95600621/Proximity_alarm.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Iana",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "arx200",
        "overrides": {}
      },
      {
        "name": "g36c",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "mk1_9mm",
        "overrides": {}
      },
      {
        "name": "gonne-6",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Melusi",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "mp5",
        "overrides": {}
      },
      {
        "name": "super_90",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "rg15",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      },
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Ace",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "ak-12",
        "overrides": {}
      },
      {
        "name": "m1014",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p9",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Zero",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "sc3000k",
        "overrides": {}
      },
      {
        "name": "mp7",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "5.7_usg",
        "overrides": {}
      },
      {
        "name": "gonne-6",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "hard_breach_charge",
        "name": "Hard Breach Charge",
        "side": "attack",
        "amount": 2,
        "description": "Explosive device that automatically detonates to create entryways in breakable and reinforced surfaces.",
        "notes": "Takes 2 seconds to deploy on a wall and 4 seconds to detonate.",
        "icon": {
          "svg": {
            "contents": "<defs><mask id=\"r6data__hard_breach_charge__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M308 104.69q-8-2.5-8-8v-32h-32v24.36q0 7.05-8 7.05\"></path><path fill=\"#000\" d=\"M96 256a1 1 0 0 0 320 0 1 1 0 0 0-320 0\"></path></mask></defs><path fill-rule=\"evenodd\" d=\"M16 140c50-1 104-54 104-104h272c0 50 54 104 104 104v232c-51 0-104 54-104 104H120c0-50-54-104-104-104Z\" mask=\"url(#r6data__hard_breach_charge__mask)\"></path><path fill-rule=\"evenodd\" d=\"M20 80q0-40 40-40h392q40 0 40 40v352q0 40-40 40H60q-40 0-40-40Zm16 0q0-24 24-24h392q24 0 24 24v352q0 24-24 24H60q-24 0-24-24Z\"></path><path d=\"M16 80q0-44 44-44v24q-20 0-20 20Zm480 0q0-44-44-44v24q20 0 20 20Zm0 352q0 44-44 44v-24q20 0 20-20Zm-480 0q0 44 44 44v-24q-20 0-20-20Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__hard_breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__hard_breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/hard_breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3OvnVPWY1UyrDE913kU0a1/eae4b2a1584234ea2ff4ad6481239f3b/SecondaryBreacher.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Aruni",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "p10_roni",
        "overrides": {}
      },
      {
        "name": "mk_14_ebr",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "prb92",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Flores",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "ar33",
        "overrides": {}
      },
      {
        "name": "sr-25",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "gsh-18",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Thunderbird",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "spear_.308",
        "overrides": {}
      },
      {
        "name": "spas-15",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "bearing_9",
        "overrides": {}
      },
      {
        "name": "q-929",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Osa",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "556xi",
        "overrides": {}
      },
      {
        "name": "pdw9",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "pmm",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      },
      {
        "slug": "impact_emp_grenade",
        "name": "Impact EMP Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging impact grenade that temporarily deactivates nearby opponent electronic devices.",
        "notes": "1.8 meters spherical range, disables electronic gadgets for 9 seconds.",
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__impact_emp_grenade__clip\"><path d=\"M0 100h512v512H0z\"></path></clipPath></defs><path d=\"M74 81q-2-13 0-25C84 3 428 3 438 57q2 12 0 24Z\"></path><path fill-rule=\"evenodd\" d=\"M16 256a1 1 0 0 0 480 0 1 1 0 0 0-480 0m347-132-75 121 55 89-192 110 70-130-41-83Z\" clip-path=\"url(#r6data__impact_emp_grenade__clip)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_emp_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_emp_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/emp_impact_grenade.png"
        },
        "iconOfficial": null
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Thorn",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "uzk50gi",
        "overrides": {}
      },
      {
        "name": "m870",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "1911_tacops",
        "overrides": {}
      },
      {
        "name": "c75_auto",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "deployable_shield",
        "name": "Deployable Shield",
        "side": "defense",
        "amount": 1,
        "description": "Bulletproof shield that's deployed on the ground or attached to doorframes to provide protective cover.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m75 16 181 34 181-33v148l-181 38-181-38Z\"></path><path d=\"m57 181 199 38 199-38v167l-199 38-199-38Z\"></path><path d=\"m47 364 209 38 209-38v94l-209 38-209-38Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__deployable_shield",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__deployable_shield r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/deployable_shield.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/W0WE0X2VQlxwWIAFCJ6Jm/523650a39de5a23dd9520d7299c9e25a/Deployable_Shield.png"
      },
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Azami",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "9x19vsn",
        "overrides": {}
      },
      {
        "name": "acs12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "d-50",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      },
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Sens",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "pof-9",
        "overrides": {}
      },
      {
        "name": "417",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "sdp_9mm",
        "overrides": {}
      },
      {
        "name": "gonne-6",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "hard_breach_charge",
        "name": "Hard Breach Charge",
        "side": "attack",
        "amount": 2,
        "description": "Explosive device that automatically detonates to create entryways in breakable and reinforced surfaces.",
        "notes": "Takes 2 seconds to deploy on a wall and 4 seconds to detonate.",
        "icon": {
          "svg": {
            "contents": "<defs><mask id=\"r6data__hard_breach_charge__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M308 104.69q-8-2.5-8-8v-32h-32v24.36q0 7.05-8 7.05\"></path><path fill=\"#000\" d=\"M96 256a1 1 0 0 0 320 0 1 1 0 0 0-320 0\"></path></mask></defs><path fill-rule=\"evenodd\" d=\"M16 140c50-1 104-54 104-104h272c0 50 54 104 104 104v232c-51 0-104 54-104 104H120c0-50-54-104-104-104Z\" mask=\"url(#r6data__hard_breach_charge__mask)\"></path><path fill-rule=\"evenodd\" d=\"M20 80q0-40 40-40h392q40 0 40 40v352q0 40-40 40H60q-40 0-40-40Zm16 0q0-24 24-24h392q24 0 24 24v352q0 24-24 24H60q-24 0-24-24Z\"></path><path d=\"M16 80q0-44 44-44v24q-20 0-20 20Zm480 0q0-44-44-44v24q20 0 20 20Zm0 352q0 44-44 44v-24q20 0 20-20Zm-480 0q0 44 44 44v-24q-20 0-20-20Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__hard_breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__hard_breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/hard_breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3OvnVPWY1UyrDE913kU0a1/eae4b2a1584234ea2ff4ad6481239f3b/SecondaryBreacher.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Grim",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "552_commando",
        "overrides": {}
      },
      {
        "name": "sg-cqb",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "p229",
        "overrides": {}
      },
      {
        "name": "bailiff_410",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "breach_charge",
        "name": "Breach Charge",
        "side": "attack",
        "amount": 3,
        "description": "Explosive device that's deployed on breakable surfaces and is manually detonated to create an entryway.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M100 100c0-50 86-14 86-46V34c0-24 140-24 140 0v20c0 32 86-4 86 43v108h-25v30h25v30h-25v30h25v125c0 25-60 8-60 24v30c0 29-192 29-192 0v-30c0-16-60 1-60-18V295h25v-30h-25v-30h25v-30h-25Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      },
      {
        "slug": "hard_breach_charge",
        "name": "Hard Breach Charge",
        "side": "attack",
        "amount": 2,
        "description": "Explosive device that automatically detonates to create entryways in breakable and reinforced surfaces.",
        "notes": "Takes 2 seconds to deploy on a wall and 4 seconds to detonate.",
        "icon": {
          "svg": {
            "contents": "<defs><mask id=\"r6data__hard_breach_charge__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M308 104.69q-8-2.5-8-8v-32h-32v24.36q0 7.05-8 7.05\"></path><path fill=\"#000\" d=\"M96 256a1 1 0 0 0 320 0 1 1 0 0 0-320 0\"></path></mask></defs><path fill-rule=\"evenodd\" d=\"M16 140c50-1 104-54 104-104h272c0 50 54 104 104 104v232c-51 0-104 54-104 104H120c0-50-54-104-104-104Z\" mask=\"url(#r6data__hard_breach_charge__mask)\"></path><path fill-rule=\"evenodd\" d=\"M20 80q0-40 40-40h392q40 0 40 40v352q0 40-40 40H60q-40 0-40-40Zm16 0q0-24 24-24h392q24 0 24 24v352q0 24-24 24H60q-24 0-24-24Z\"></path><path d=\"M16 80q0-44 44-44v24q-20 0-20 20Zm480 0q0-44-44-44v24q20 0 20 20Zm0 352q0 44-44 44v-24q20 0 20-20Zm-480 0q0 44 44 44v-24q-20 0-20-20Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__hard_breach_charge",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__hard_breach_charge r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/hard_breach_charge.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3OvnVPWY1UyrDE913kU0a1/eae4b2a1584234ea2ff4ad6481239f3b/SecondaryBreacher.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Solis",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "p90",
        "overrides": {}
      },
      {
        "name": "ita12l",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "smg-11",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "impact_grenade",
        "name": "Impact Grenade",
        "side": "defense",
        "amount": 2,
        "description": "Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"m158 66-13-27 38-19 10 17c37-20 89-20 126 0l10-17 38 19-13 27Z\"></path><defs><mask id=\"r6data__impact_grenade__mask\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"></path><path fill=\"#000\" d=\"M29 269q227 114 454 0v30q-227 114-454 0Z\"></path></mask></defs><path d=\"M30 269a1 1 0 0 0 452 0 1 1 0 0 0-452 0\" mask=\"url(#r6data__impact_grenade__mask)\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__impact_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__impact_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/impact_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png"
      },
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Brava",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "para-308",
        "overrides": {}
      },
      {
        "name": "camrs",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "super_shorty",
        "overrides": {}
      },
      {
        "name": "usp40",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      },
      {
        "slug": "claymore",
        "name": "Claymore",
        "side": "attack",
        "amount": 2,
        "description": "Explosive trap that's deployed on the ground and is useful against roaming Defenders.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M42 72h98V48l32-32h58v8h52v-8h58l32 32v24h98v206q-214 40-428 0Z\"></path><path id=\"r6data__claymore__leg\" d=\"m110 287 83 198 14 11 3-17-81-192Z\"></path><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 256 0)\"></use><use href=\"#r6data__claymore__leg\" transform=\"translate(256)\"></use><use href=\"#r6data__claymore__leg\" transform=\"matrix(-1 0 0 1 512 0)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__claymore",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__claymore r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/claymore.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  },
  {
    "name": "Fenrir",
    "role": "defender",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "mp7",
        "overrides": {}
      },
      {
        "name": "sasg-12",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "bailiff_410",
        "overrides": {}
      },
      {
        "name": "5.7_usg",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "bulletproof_camera",
        "name": "Bulletproof Camera",
        "side": "defense",
        "amount": 1,
        "description": "Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.",
        "notes": "EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.",
        "icon": {
          "svg": {
            "contents": "<path d=\"m16 111 15-15h30v12H49v296h12v12H31l-15-15Zm479 0-15-15h-30v12h12v296h-12v12h30l15-15Z\"></path><path fill-rule=\"evenodd\" d=\"M65 128q0-20 20-20h342q20 0 20 20v256q0 20-20 20H85q-20 0-20-20Zm50 0h282v30l30 30v166l-30 30H115l-30-30V189l30-30Zm-14 65 20-20 25 25h220l25-25 20 20v136l-20 20h-50v-25q0-10-10-10H181q-10 0-10 10v25h-50l-20-20Zm111 63a1 1 0 0 0 88 0 1 1 0 0 0-88 0m-92-66 30 30-3 3-30-30zm272 0-30 30 3 3 30-30zm0 148-30-30 3-3 30 30zm-272 0 30-30-3-3-30 30zm103-98a1 1 0 0 0 30 0 1 1 0 0 0-30 0\"></path><ellipse cx=\"256\" cy=\"349\" rx=\"20\"></ellipse>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__bulletproof_camera",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__bulletproof_camera r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/bulletproof_camera.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png"
      },
      {
        "slug": "barbed_wire",
        "name": "Barbed Wire",
        "side": "defense",
        "amount": 2,
        "description": "Non-damaging razor wire that slows opponents and creates noise when walked through.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<defs><clipPath id=\"r6data__barbed_wire__cut\"><path d=\"M491 256a1 1 0 0 0-435 0 1 1 0 0 0 435 0m-283 0a1 1 90 0 1 249 0 1 1 90 0 1-249 0\"></path></clipPath></defs><path fill-rule=\"evenodd\" d=\"M56 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\" clip-path=\"url(#r6data__barbed_wire__cut)\"></path><path fill-rule=\"evenodd\" d=\"M220 256a1 1 0 0 0 226 0 1 1 0 0 0-226 0m16 0a1 1 0 0 0 194 0 1 1 0 0 0-194 0\"></path><path id=\"r6data__barbed_wire__spike\" d=\"m206 157 3-25 4 20 11-11-8 21-3 21-4-15-12 7Z\"></path><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(144 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(216 169 256)\"></use><use href=\"#r6data__barbed_wire__spike\" transform=\"rotate(288 169 256)\"></use><use id=\"r6data__barbed_wire__spike-2\" href=\"#r6data__barbed_wire__spike\" transform=\"rotate(45 250.5 455.173)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(72 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(144 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(216 333 256)\"></use><use href=\"#r6data__barbed_wire__spike-2\" transform=\"rotate(288 333 256)\"></use>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__barbed_wire",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__barbed_wire r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/barbed_wire.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png"
      }
    ],
    "playstyles": [
      "Anchor",
      "Roamer",
      "Intel / Denial",
      "Support"
    ]
  },
  {
    "name": "Ram",
    "role": "attacker",
    "icon": "",
    "primaryDefaults": {
      "sights": {
        "magnifying": [
          "Magnified A",
          "Magnified B",
          "Magnified C"
        ],
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "No Barrel",
        "Suppressor",
        "Flash Hider",
        "Compensator",
        "Muzzle Brake",
        "Extended Barrel"
      ],
      "grips": [
        "Vertical Grip",
        "Angled Grip",
        "Horizontal Grip"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "primaryWeapons": [
      {
        "name": "r4-c",
        "overrides": {}
      },
      {
        "name": "lmg-e",
        "overrides": {}
      }
    ],
    "secondaryDefault": {
      "sights": {
        "nonmagnifying": [
          "Red Dot A",
          "Red Dot B",
          "Red Dot C",
          "Holo A",
          "Holo B",
          "Holo C",
          "Holo D",
          "Reflex A",
          "Reflex B",
          "Reflex C"
        ],
        "nosight": [
          "Iron Sight"
        ]
      },
      "barrels": [
        "Muzzle Brake",
        "Suppressor"
      ],
      "lasers": [
        "Laser",
        "No Laser"
      ]
    },
    "secondaryWeapons": [
      {
        "name": "mk1_9mm",
        "overrides": {}
      },
      {
        "name": "ita12s",
        "overrides": {}
      }
    ],
    "gadgets": [
      {
        "slug": "stun_grenade",
        "name": "Stun Grenade",
        "side": "attack",
        "amount": 3,
        "description": "Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path fill-rule=\"evenodd\" d=\"M115 16h161l121 145v179l-24-24V173l-70-84h-52l33 40h16v80h-16v212h16v75H140v-75h16V209h-16v-80h16l33-40Zm105 197 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Zm0 76 26 26-26 26-26-26Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__stun_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__stun_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/stun_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"
      },
      {
        "slug": "smoke_grenade",
        "name": "Smoke Grenade",
        "side": "attack",
        "amount": 2,
        "description": "Non-damaging grenade that produces smoke shortly after being thrown to cover advances.",
        "notes": null,
        "icon": {
          "svg": {
            "contents": "<path d=\"M98 103h48V16h277l-70 72 13 12v241l-24-24V107l-24-20h-54v16h48v45H98Z\"></path><path d=\"M108 168h194v266H110ZM94 454h222v42H94Z\"></path>",
            "attributes": {
              "xmlns": "http://www.w3.org/2000/svg",
              "id": "r6data__smoke_grenade",
              "width": "512",
              "height": "512",
              "fill": "#fff",
              "stroke": "none",
              "class": "r6data__gadget r6data__gadget__simple r6data__gadget__simple__smoke_grenade r6data",
              "viewBox": "0 0 512 512"
            }
          },
          "png": "https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets/gadgets/simple/pngs/smoke_grenade.png"
        },
        "iconOfficial": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png"
      }
    ],
    "playstyles": [
      "Intel / Drone Op",
      "Rush",
      "Slow Push",
      "Support / Utility",
      "Flank / Split Pusher",
      "Site Anchor / Plantholder"
    ]
  }
];
export default operatorData;