const a=[.71,.03,.01,.17,-.09,.61,-.03,.2,-.06,-.11,-.07,.34,-.44,-.03,-.01,.24,.24,-.04,-.41,.35,.04,.09,-.06,.01,-.05,-.07,.09,.06,.08,.02,.01,.12,-.02,.73,.21,.19,.09,-.04,-.24,-.03,.01,-.05,.18,.18,-.33,-.04,-.13,.46,.02,-.15,-.12,.81,.17,0,.12,-.01,-.09,.78,-.09,-.1,.2,-.03,-.03,.1,-.04,.06,.01,-.07,.03,.07,-.02,.06,0,-.22,-.01,.26,.17,.19,-.02,.26,.08,-.08,.03,-.04,.11,-.14,-.08,-.21,.03,-.13,.13,-.16,0,.14,.19,-.42,.06,.56,.07,.2,-.04,.04,.08,-.07,-.05,-.34,.03,-.16,.04,-.07,.31,-.15,-.15,.23,.09,.01,.1,.14,.13,-.05,-.22,-.2,.34,-.11,.14,-.14,-.06,.25,.17,-.07,.05,.04,.03,-.13,.33,.36,.05,-.27,.12,.8,-.03,.85,-.07,-.02,.96,.1,.11,.27,.01,.02,.03,.05,.14,.35,.11,.15,-.14,.68,.11,-.02,.01,.02,-.33,-.18,.03,.08,.01,.17,.15,-.08,.91,.13,.11,-.12,-.11,.1,-.01,-.04,.18,0,-.04,.19,-.1,-.14,-.17,-.46,.42,.62,.08,.32,.07,.19,-.36,.09,0,.04,-.07,.33,.45,.13,-.03,-.09,-.07,.3,.03,.03,-.1,-.02,.04,-.51,.06,-.01,.27,-.05,.77,.06,-.09,.01,.14,-.07,0,-.07,-.03,.04,-.2,-.07,.11,.16,.26,-.01,-.01,-.12,-.09,-.03,-.67,.94,-.08,-.03,.01,.02,-.01,-.07,-.04,.04,.06,.02,0,.09,.18,.1,.14,-.24,.01,-.13,-.02,-.28,-.31,.07,-.06,-.04,.03,-.08,.05,-.05,.12,-.04,-.03,-.05,-.07,.33,.3,.35,-.03,-.05,-.15,-.24,.01,.2,-.06,.03,-.01,-.16,.03,-.17,-.1,-.12,-.22,.05,.25,.03,-.03,-.28,-.08,0,.04,.16,-.04,.52,.11,-.08,.18,-.06,.06,-.14,.3,-.16,-.06,0,.06,-.07,-.07,-.22,-.42,.92,.11,-.07,0,-.04,0,-.25,-.1,.19,.02,-.08,-.09,-.1,.03,-.02,.02,-.12,.01,-.04,-.01,-.27,0,.19,.1,.04,-.01,.05,.04,.02,-.13,.15,-.03,-.05,-.15,.05,.02,-.15,-.02,.32,.59,-.1,.02,-.01,-.05,-.05,-.03,-.01,.18,-.21,-.12,-.28,-.05,.2,.69,-.07,.15,-.1,.11,-.08,-.08,.28,.24,.23,-.2,-.06,-.04,.18,.18,.01,.04,.02,.02,.01,.01,-.13,-.07,-.07,-.01,-.78,.14,-.16,-.23,-.06,.08,-.14,.01,-.03,.01,0,-.05,.06,-.04,-.28,-.04,-.04,-.05,-.02,-.12,-.06,-.13,-.04,.24,.33,-.08,.03,.02,-.43,.69,-.3,.26,-.55,.07,-.02,-.1,-.28,-.12,-.02,-.2,.24,.02,.45,.07,-.06,0,-.05,-.03,.29,0,-.06,-.08,.55,-.13,.06,-.05,-.17,.3,.34,-.1,-.02,.14,-.1,0,.03,-.09,.02,.56,-.2,0,.02,.28,.24,.08,.03,-.08,-.24,.23,.02,-.13,0,.56,.59,-.04,-.01,.04,.05,.07,-.08,.02,-.03,.06,.03,-.11,-.08,.05,-.02,.02,-.02,-.05,.34,-.08,-.11,.15,-.04,-.11,-.23,-.04,.02,.02,.13,-.06,.02,-.01,.02,.32,.06,-.08,.1,0,.05,-.09,-.17,-.13,.06,.47,.03,.21,-.01,-.02,-.02,-.16,-.22,.07,.91,.07,.42,.06,.06,0,-.1,-.06,.03,.83,.74,-.06,-.1,.14,.21,-.05,-.13,-.74,-.06,.16,-.03,.53,-.08,-.02,.05,-.23,-.06,-.02,.07,-.01,-.51,-.05,-.09,-.05,0,-.07,.08,-.15,.09,-.05,-.19,-.04,-.25,.32,-.3,-.03,.01,.09,.02,-.07,-.03,-.25,-.08,-.17,0,.24,.55,-.03,.07,-.03,-.04,-.05,.04,.19,.05,-.18,-.05,-.1,-.03,-.06,.42,-.12,-.12,.61,-.05,-.01,.01,-.02,.36,.01,-.03,-.03,.14,.3,.08,-.07,.15,-.33,.25,-.48,.19,-.08,.08,-.1,.66,.04,.1,.1,.02,-.16,.55,-.06,-.04,0,-.03,-.33,-.12,-.21,.06,-.03,.08,.03,-.02,.22,-.12,.21,-.04,.16,.22,.1,-.03,.06,-.05,-.37,-.05,.54,.31,-.07,0,-.01,.13,-.01,.06,-.28,-.1,-.02,.03,-.01,.18,-.04,.44,-.11,-.12,.04,.03,-.07,.23,0,0,.17,-.04,-.08,-.07,.07,.26,.06,.13,-.04,.15,.44,.5,.24,-.1,-.01,.18,.24,.01,.07,-.75,.81,-.04,.54,.31,-.04,.3,-.09,.01,.13,-.24,.09,-.22,.26,.24,.55,.03,-.03,-.1,.18,.06,-.12,0,-.05,-.01,-.17,.06,.1,0,.12,-.36,-.02,-.31,-.17,.02,.67,-.01,.32,.08,-.07,-.06,-.02,-.05,-.01,-.16,.02,-.32,-.06,.02,.11,-.07,-.11,.4,-.05,-.02,-.13,.12,.76,-.06,.16,.39,-.01,-.21,-.13,.19,.26,-.03,.08,.02,.02,.09,-.02,.04,-.02,-.57,-.05,.75,.04,.06,-.01,.91,-.03,.41,-.11,.1,-.07,-.01,-.06,-.06,.31,-.02,.01,.02,-.13,.2,.02,-.11,.02,-.07,.01,-.04,-.09,.1,-.06,-.04,-.02,-.07,-.23,.27,-.23,.04,.28,-.16,.04,.14,.12,-.17,.09,.05,-.08,.13,-.12,-.13,-.2,-.05,.01,-.03,.58,.44,-.02,-.43,-.29,-.07,.15,.26,.01,.2,-.09,-.09,.27,.01,-.11,.07,.14,-.31,.59,-.02,.13,.01,-.62,-.12,.1,0,-.11,.17,-.05,.17,.01,.19,.13,-.21,.08,-.24,.22,-.14,.12,.18,.08,0,-.13,-.13,.16,-.04,.06,.75,-.12,-.02,-.02,.2,-.18,-.02,.13,.07,.08,-.01,.03,.83,0,.13,-.16,-.08,-.23,.04,.17,-.11,.03,0,-.16,-.42,-.25,.17,.04,-.36,.28,-.36,-.05,-.13,.04,.04,.04,-.13,1,-.04,.69,-.07,.64,0,.84,-.05,.17,-.09,-.02,-.01,.35,.02,-.07,-.17,.21,-.22,-.14,.06,-.03,-.01,.75,-.02,-.05,.02,.19,-.04,-.18,-.04,-.17,-.01,.07,-.05,.34,-.04,.58,-.04,-.06,-.25,.01,-.03,.02,.07,-.03,-.08,-.07,.06,-.22,-.06,.05,-.01,-.05,.01,-.07,.06,.01,-.06,.04,-.04,-.02,.04,-.04,.1,-.17,.07,-.36,.33,.01,.05,-.05,-.06,-.07,-.03,-.02,.01,-.02,.06,-.02,.05,.02,-.25,-.03,.67,.77,.31,-.24,-.05,-.01,-.04,-.13,.01,-.05,.17,-.04,-.22,.14,-.16,0,.24,.33,.13,.63,.26,-.2,.48,.02,.25,.05,-.18,.26,-.1,.05,.34,.15,.09,-.06,-.24,.12,-.05,.11,-.28,0,-.12,.79,-.17,-.18,-.24,.15,-.13,-.2,.12,-.1,-.05,.05,.01,-.08,-.02,-.36,-.13,.24,-.04,.24,-.01,-.09,.11,.08,.08,.05,-.09,-.39,.26,.12,.2,.12,-.07,-.17,.7,-.2,-.09,.04,.1,.2,-.01,-.04,0,.03,.45,.53,-.04,.06,-.09,-.05,-.03,.35,-.02,.81,.03,.12,0,.29,-.06,.02,-.32,-.01,-.04,-.06,-.1,-.03,.04,.03,-.03,-.02,-.24,.01,-.03,.23,-.07,.31,.08,-.06,.2,-.1,-.16,.01,.19,-.7,.04,-.01,-.27,.07,-.34,-.12,-.06,.12,-.11,.12,-.06,.54,.45,-.07,.37,.03,-.08,.15,.04,-.09,.01,-.04,-.3,.32,-.06,-.03,.03,.91,.12,-.05,.4,-.24,-.04,.02,.94,-.1,-.11,.05,-.13,.4,.28,.54,-.03,-.28,-.09,.95,0,.52,.92,0,-.13,.75,-.05,-.17,.01,0,0,-.02,.03,-.2,.57,-.12,-.12,0,-.18,-.09,.2,-.09,-.03,-.07,-.14,.3,-.03,-.05,.67,-.09,-.09,-.03,.02,.06,-.02,.1,-.15,-.02,.54,.03,.02,-.03,.06,.21,.3,.48,0,-.06,-.01,.14,.11,-.03,.08,.03,.54,-.42,.04,-.03,-.06,.54,-.09,-.03,.12,.26,-.02,.04,.94,.92,.29,-.28,-.15,.2,.16,-.04,-.1,-.07,-.02,-.05,.09,-.21,.25,.35,.95,-.05,-.06,.02,.17,.95,.1,.58,-.04,-.07,.71,-.06,.11,.61,.25,.42,.35,.02,-.25,.09,.01,.38,-.01,.3,0,-.29,.32,-.03,.03,.09,.74,-.07,-.01,.04,.08,.04,0,.01,.53,.08,-.1,.04,.59,.05,.12,.1,.86,-.06,-.02,.23,.57,-.15,.11,-.05,.25,.01,-.12,-.09,.01,-.09,-.04,-.06,.12,.33,-.15,.06,-.14,.32,.05,-.05,.16,-.07,-.06,-.11,-.02,-.28,-.06,.1,-.1,-.06,.81,.05,-.08,-.48,-.07,.02,-.5,.01,-.08,.05,-.13,-.08,.02,-.03,-.1,.05,.07,.13,.26,-.15,.09,-.01,-.58,.21,-.12,.01,-.23,-.18,.06,.49,.02,.13,-.03,.1,-.14,-.65,.01,-.14,0,.05,-.04,.1,.02,-.77,-.01,-.03,-.01,.08,-.13,.13,.12,-.04,.09,-.15,.01,-.48,-.06,.05,-.01,.18,-.05,-.03,-.03,-.02,.07,-.05,.01,-.71,-.12,.09,.01,.34,.02,.2,-.02,-.01,.12,.03,.69,-.05,-.07,-.08,-.13,.09,-.02,-.05,-.1,.37,-.13,-.13,.29,-.07,-.07,.7,-.07,.18,-.04,-.12,0,.19,.08,.04,.34,.24,.07,.04,.11,-.09,0,-.14,-.11,.31,.12,-.06,.02,-.09,-.01,.24,.73,.11,-.38,.03,.03,-.1,-.06,.7,.01,.09,-.06,.01,.07,.44,-.09,.06,-.05,-.06,-.1,-.06,.15,.1,-.31,.04,-.15,.28,.46,.14,.01,0,.18,-.06,.1,.06,.18,-.03,.09,.03,.16,-.01,.03,.03,-.3,-.08,-.04,-.28,-.19,-.04,-.1,-.02,.06,-.13,.17,.02,.04,.06,-.17,.07,-.1,.2,-.27,-.03,.11,.01,.03,-.13,.05,-.09,-.06,.02,-.09,-.27,.29,-.02,-.09,.08,-.1,-.33,-.34,-.11,-.09,-.12,-.18,-.01,.06,-.1,.2,-.13,-.11,-.14,.83,.15,.15,.16,.04,-.1,-.18,.04,.09,.05,-.03,.06,-.03,-.09,0,-.06,-.04,-.04,-.07,-.26,.33,-.03,.02,-.18,-.06,-.08,-.09,.89,.03,-.14,.05,-.1,-.21,-.14,.19,-.17,.03,.05,.11,-.19,-.13,-.03,-.07,-.05,-.07,-.1,-.07,.93,0,-.12,.07,-.05,-.07,-.03,-.01,-.02,.04,-.12,.04,-.07,-.05,-.06,-.11,-.05,.09,.01,-.09,.06,-.1,.03,-.1,.14,0,-.16,-.04,.09,-.07,-.02,.04,.12,.09,.06,.04,-.13,-.07,-.3,0,-.07,.16,.09,-.09,-.1,-.09,.45,-.05,-.13,.21,.09,-.15,-.31,.27,-.04,-.13,.01,-.12,.11,.2,-.1,-.31,-.18,-.06,-.02,-.12,-.01,-.08,.09,.49,.02,-.11,.07,-.15,-.11,-.02,-.17,-.07,.33,-.11,.12,-.18,-.04,.18,0,-.1,-.19,0,-.03,-.07,-.03,.03,.04,-.09,-.04,-.13,.08,.03,.01,-.06,-.13,-.32,.03,-.43,.06,.03,-.08,-.08,-.11,.12,.03,-.02,.07,.05,-.03,-.05,-.27,-.08,.08,.06,-.01,-.01,-.03,0,.09,-.09,.02,-.04,.01,-.05,-.04,-.19,.14,.16,-.04,-.08,-.09,-.01,-.14,-.18,-.21,-.01,.08,0,-.06,-.05,-.05,.13,-.03,0,.01,.14,.05,.46,-.36,0,.01,.14,.14,.08,-.04,.07,-.04,-.08,-.19,-.12,.91,-.23,-.06,-.38,-.01,.05,0,.04,.03,-.01,.15,-.07,.05,-.04,-.01,-.07,.04,-.05,0,-.22,.04,.02,-.16,.1,-.18,.11,0,.24,-.07,-.09,-.35,-.07,-.04,.26,-.07,.02,-.04,.12,-.05,-.04,-.05,-.05,.02,-.09,.04,-.07,-.08,-.12,-.1,.37,-.02,-.02,-.07,.07,-.12,-.1,-.13,-.1,-.09,.06,.14,.06,-.12,-.02,-.04,.07,.09,.34,.05,.05,-.05,-.01,-.04,-.05,.05,-.13,-.05,-.06,-.04,.06,-.01,-.17,.46,.03,.02,.01,.12,-.2,.08,.08,-.08,-.24,.08,.1,-.07,.95,.88,.03,.09,.02,.18,-.06,-.42,.02,.16,-.07,-.17,0,-.01,.2,-.11,-.01,-.04,-.03,-.16,.14,-.04,.1,.02,.46,0,.02,-.61,-.01,-.08,.2,-.05,-.04,-.05,.02,-.05,-.14,0,-.18,.09,-.01,.05,-.12,.08,.07,.48,-.13,-.55,.26,.02,-.02,.05,.06,.01,-.12,-.02,-.03,-.11,.88,0,.27,-.04,-.08,-.36,.22,-.04,-.25,.17,.31,.05,-.07,.16,-.11,-.1,.11,.01,-.29,-.12,.05,-.16,-.17,.3,-.06,-.4,-.08,.03,.06,-.39,-.02,.09,.59,-.11,.03,.55,-.09,.12,.02,.23,0,-.24,-.1,.85,.32,.04,.12,.07,-.01,.01,.23,.06,-.08,.01,-.06,-.05,-.68,.02,-.1,-.12,-.22,.24,.32,.1,.54,-.04,.04,-.09,.02,.06,.17,.11,.09,-.06,.65,-.2,-.06,.58,.14,-.19,0,.02,-.16,.07,-.01,.16,-.21,-.07,.11,-.04,-.18,-.01,-.06,-.02,.24,-.16,.19,.03,-.07,.42,.03,-.02,-.03,.17,-.31,-.02,.37,-.07,.03,-.02,.49,0,.22,-.02,-.13,0,-.13,-.01,0,.04,.02,-.06,.1,.29,-.01,.19,-.02,.09,-.05,-.07,-.01,-.08,-.12,-.09,.03,-.09,-.06,0,-.08,.95,-.05,.04,-.19,.04,.14,-.13,.05,.03,.17,.12,.08,.06,.01,.07,.24,-.05,-.05,-.03,.21,.21,-.39,.55,-.23,-.06,-.08,-.03,.89,-.24,.03];export{a as rvalData};
