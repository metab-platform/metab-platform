const a=[.61,.05,.09,.14,0,.55,-.07,.15,-.12,.01,.05,.38,-.36,-.1,.08,.18,.28,-.01,-.42,.2,.02,-.03,-.04,.07,0,-.03,0,.16,-.01,.04,.11,.09,.1,.54,.2,.21,.22,.03,-.11,.17,.06,.05,.22,.25,-.27,.07,-.08,.48,.08,-.16,-.12,.59,.21,0,.18,.04,0,.61,-.08,-.02,.25,.13,0,.08,.08,.07,.06,.02,.19,-.09,.08,.17,.08,-.13,.05,.25,.22,.2,-.05,.25,.12,-.03,-.03,.03,.08,-.2,-.02,-.28,-.06,-.08,.18,-.08,-.11,.18,.25,-.43,.11,.6,.03,.16,.02,.04,.03,.03,-.06,-.3,-.1,-.28,.15,-.07,.17,0,-.16,.25,.18,0,-.03,.12,.15,-.04,-.41,-.09,.36,-.14,.15,-.12,.01,.08,.15,.07,0,.09,-.07,.02,.5,.23,.18,-.38,.15,.46,.09,.51,-.03,.03,.66,.17,.11,.2,.01,-.01,.02,.02,.02,.37,.07,.15,-.04,.79,.2,.05,.04,-.04,-.29,-.17,-.09,.05,.16,.18,.11,-.06,.7,.14,.04,0,-.11,.06,-.02,-.05,.08,.06,-.03,.24,-.07,-.03,.01,-.49,.3,.6,.06,.24,.11,.08,-.28,.07,.07,.11,-.06,.15,.52,.04,-.02,.04,.05,.37,.11,.16,-.05,-.08,.08,-.5,.02,.07,.34,.06,.6,.1,-.19,-.01,.09,-.12,-.05,-.13,-.05,.07,-.17,.06,.07,.16,.33,-.04,.07,.03,.02,-.01,-.66,.69,.06,.05,-.19,.01,.17,.01,0,.18,-.01,.05,.1,.09,.2,.03,.09,-.21,.06,-.15,.08,-.34,-.2,.03,-.08,-.02,.09,.02,-.05,.07,.18,-.07,.02,0,-.01,.27,.4,.4,.13,.01,-.1,-.28,.06,.25,.02,.06,.08,-.09,-.05,-.17,-.07,.04,-.07,.18,.07,-.02,-.03,-.23,.1,.02,-.07,.17,.11,.33,.13,-.04,.21,.02,.11,-.14,.29,-.12,-.12,.14,.02,.08,.03,-.06,-.48,.6,.08,-.05,-.14,.02,.01,-.12,-.03,.23,.05,-.03,-.11,-.08,.18,-.05,-.05,-.13,-.07,-.05,.11,-.46,.02,.1,.13,.13,.05,-.04,.11,.06,-.11,.06,.09,.07,-.18,.1,.06,.03,.04,.28,.64,-.09,.11,-.08,.01,.03,-.02,.01,.11,-.11,-.15,-.39,.12,.03,.51,.08,.22,-.05,.02,.02,-.1,.08,.28,.09,-.14,-.05,.02,.21,.22,-.05,.05,.09,.13,.07,.02,.04,.05,.11,.01,-.8,.13,-.11,-.17,.05,.07,-.06,-.04,-.05,-.05,.05,-.01,-.04,0,-.08,.07,.06,-.11,-.02,-.06,-.08,-.08,-.02,.31,.38,0,-.03,.1,-.46,.48,-.15,.32,-.67,-.2,.1,.09,-.37,-.08,.06,-.17,.03,.01,.47,.04,-.02,-.08,.06,.05,.26,.01,-.02,.03,.36,-.05,.05,.07,-.01,.1,.35,.01,-.01,.01,0,-.1,.01,-.11,.14,.34,-.17,-.04,.15,.21,.2,.01,0,-.17,-.22,.36,.03,-.23,.13,.64,.61,.03,.07,.16,-.02,.17,-.01,.05,.08,.06,-.08,.01,-.05,-.12,-.06,.07,-.02,.07,.31,-.26,.05,.19,.01,-.2,-.22,.01,.14,.09,-.04,-.01,.04,.01,.09,.26,.12,.06,.19,.03,.04,.03,-.12,.05,.01,.5,.03,.17,-.08,.03,.06,-.07,-.1,.13,.66,.3,.36,.03,.26,-.02,-.2,-.19,.16,.72,.61,.03,-.04,-.08,.28,.01,-.03,-.73,-.03,.21,-.02,.47,-.02,-.02,-.04,-.02,.07,.08,.12,.07,-.57,0,.09,-.09,.15,-.01,-.02,-.09,-.03,-.16,-.24,-.08,-.2,.36,-.33,-.05,.03,-.05,.11,-.07,.06,-.12,-.07,-.05,-.14,.3,.76,-.07,.05,-.06,.04,.08,.07,.24,.18,-.16,-.07,-.16,.05,-.12,.32,-.13,-.05,.49,.09,.02,.05,0,.38,0,-.06,.14,.17,.41,-.08,-.07,.26,-.45,.15,-.43,.11,.03,.09,.09,1,-.13,.21,.02,.04,-.07,.61,-.03,.07,0,0,-.35,.01,0,.03,-.07,.03,.1,.16,.13,-.16,.31,.09,.12,.29,-.05,.07,-.05,0,-.48,-.09,.6,.25,.01,.09,.08,.15,-.05,-.07,-.26,-.04,.07,.05,.11,.29,-.01,.5,-.03,-.03,.04,.06,-.11,.36,.01,.02,.14,.1,-.02,-.02,.12,.16,-.07,-.07,.18,.19,.22,.57,.32,-.04,.06,.04,.06,.03,-.03,-.72,.49,-.27,.63,.39,-.06,.24,.03,-.07,.01,-.16,.26,-.19,.35,.1,.46,-.06,0,.11,.28,.07,-.13,.02,-.16,.15,.05,-.07,.1,0,.26,-.32,.03,-.19,-.06,-.09,.71,-.11,.36,.1,.12,-.08,.04,.05,.13,-.18,.12,-.24,.06,.12,.02,-.04,-.22,.35,-.12,.13,-.15,.11,.78,-.05,.1,.34,.03,-.14,-.21,.12,.43,-.04,-.07,.02,.03,-.14,-.05,-.02,-.01,-.55,-.04,.52,.03,.13,.05,.69,.03,.4,-.23,.09,.07,.08,-.01,-.06,.46,.05,0,-.02,-.01,.22,.02,-.11,-.06,-.03,-.03,.05,.01,.08,.04,.05,-.02,-.03,-.26,.12,-.26,.04,.38,-.14,.09,.12,.27,-.08,.02,.12,.12,.04,-.04,.02,-.27,0,-.01,.07,.57,.25,-.1,-.32,-.32,.05,.28,.33,0,.01,-.09,.03,.28,.03,-.18,.07,-.05,-.26,.64,-.01,.25,.09,-.62,-.01,.14,-.02,-.2,.15,0,.28,.05,.14,.08,-.15,.15,-.12,.35,-.04,.02,.18,.07,.12,-.26,.06,.01,.02,.01,.76,.03,.05,.07,.4,-.02,.06,-.01,.14,-.06,-.04,.17,.66,.01,.2,-.02,.02,-.1,-.04,.08,-.16,.11,-.01,-.02,-.57,-.37,.14,.15,-.45,.16,-.39,.06,-.07,.08,.1,.07,-.09,.66,.09,.54,.03,.58,.03,.52,-.03,.12,-.15,.02,.01,.49,.1,.03,-.12,.08,-.31,-.04,.07,.06,-.01,.62,.08,-.09,.11,.09,.12,-.07,0,0,-.07,.07,-.17,.26,0,.66,.01,.04,-.06,.21,.07,.02,.16,-.01,.21,-.02,-.09,-.16,-.11,.07,-.02,.03,-.1,-.04,.05,.09,-.11,.08,-.09,-.01,.16,-.02,.08,-.29,-.11,-.38,.29,.03,.08,-.08,-.14,-.21,-.12,0,.12,-.02,.05,-.08,-.02,.01,-.21,.02,.82,.87,.14,-.09,.02,.01,.01,-.14,.03,-.15,.11,-.11,-.25,.08,-.16,.01,.17,.35,.09,.82,.19,-.26,.58,.03,.19,-.09,-.13,.07,-.07,.14,.25,0,.17,-.06,-.17,.14,0,.2,-.4,.16,-.2,.76,-.28,-.07,-.19,.17,-.09,-.18,.18,.03,-.1,.07,.04,.13,.09,-.41,-.23,.27,.05,.49,-.06,-.05,.08,.04,.2,.09,-.06,-.42,.2,.14,.17,.03,.02,-.12,.87,-.16,-.07,.01,.11,.19,-.01,.05,-.02,.11,.39,.42,.08,-.01,.07,.05,.13,.32,.04,.62,-.09,.15,-.02,.3,-.04,-.06,-.07,-.12,-.03,-.21,0,.01,-.08,.03,-.06,-.12,-.16,.07,.06,.09,-.15,.25,-.02,-.01,.17,.06,-.12,.18,.08,-.65,.07,-.01,-.14,.03,-.3,-.21,-.02,.17,-.03,.09,.04,.63,.47,-.23,.58,.04,-.02,.23,.03,-.05,.18,.05,-.12,.24,0,.05,-.11,.68,-.07,.01,.42,-.27,-.01,.08,.67,.02,.14,.07,.05,.26,.19,.42,-.12,-.1,-.03,.64,.13,.56,.68,-.04,-.08,.5,-.07,-.05,.13,.01,.1,-.07,.28,-.15,.69,-.22,-.1,-.06,-.11,.05,.28,-.12,-.19,.02,.06,.27,-.01,-.11,.58,.06,.07,.03,.04,-.08,.01,-.07,-.24,.04,.67,.07,-.02,.05,-.01,.26,.21,.51,.05,-.1,.02,.07,.07,-.07,.04,.08,.57,-.41,.15,.02,-.11,.3,.01,-.08,.25,.06,.03,.05,.67,.65,.39,-.32,-.07,.18,.25,-.02,-.07,.01,.07,-.01,.05,-.34,.18,.52,.63,.1,.04,.03,.34,.67,-.04,.66,.03,.14,.89,-.05,.1,.38,.35,.46,.14,-.02,-.15,.15,-.03,.38,.04,.11,.04,-.28,.15,-.08,.03,.05,.86,-.05,.3,.02,-.01,-.04,.02,.03,.61,.21,.01,-.03,.62,.03,-.05,.02,.62,.02,.04,.12,.78,-.21,.17,.03,.21,.08,-.14,-.15,.01,-.11,-.1,.04,.03,.2,-.22,.13,-.06,.24,-.05,.07,.02,-.15,.11,-.12,-.06,-.26,.05,.15,0,.09,.47,0,-.11,-.33,-.03,-.03,-.53,.02,.02,.02,0,-.05,.17,0,.19,-.07,.17,.07,.2,-.04,.25,.06,-.66,-.07,.07,-.11,-.17,-.16,.07,.53,-.01,.14,-.07,.01,-.03,-.73,.02,.03,.07,.08,.02,.1,.12,-.83,.02,.04,.12,.11,-.03,.07,-.08,-.03,.02,-.1,-.1,-.32,-.01,.07,.08,.13,-.07,-.08,-.01,.01,.14,-.04,.01,-.56,-.05,.1,-.02,.29,0,.24,0,.12,.09,.15,.53,.08,-.09,.02,-.1,.14,.15,-.13,-.01,.22,.03,-.14,.31,.13,.12,.52,-.08,.11,.11,-.04,.05,.19,.04,.07,.42,.12,.1,.19,.13,.14,0,-.14,.01,.24,.06,-.08,.08,-.05,.05,.28,.73,.17,-.34,.09,.11,.08,-.03,.57,.02,-.01,-.09,-.01,.02,.44,.19,.12,-.04,.01,.06,.09,.08,.08,-.23,.03,-.21,.32,.15,.12,-.03,.2,.08,-.03,.06,.07,.29,-.01,-.03,.02,.37,0,-.01,.03,-.26,-.15,-.13,-.4,-.17,.04,-.16,-.05,.02,-.09,.18,.01,.01,-.02,-.18,.04,.03,.13,-.28,-.1,.03,.15,.1,-.06,.09,-.07,0,.11,-.07,-.2,.22,-.04,-.2,.13,-.03,-.28,-.3,-.03,.01,.01,-.05,.07,.13,-.05,.24,-.15,.07,.04,.59,.25,.04,.06,.01,-.15,-.13,-.02,.05,.12,.09,.01,.08,.11,.09,-.02,.01,.12,-.04,-.37,.17,.06,-.07,-.06,-.14,-.04,-.04,.58,.12,-.07,.15,.02,-.06,-.01,.14,-.18,-.03,-.08,.09,-.06,.02,.03,-.01,.12,-.02,-.11,-.03,.71,.12,-.13,-.03,-.08,.03,.12,-.07,.02,-.06,-.08,-.01,.03,.02,.1,.02,.04,.11,.06,-.04,-.06,.03,.09,-.1,.11,.07,-.03,.05,-.01,-.12,0,.15,.08,0,.09,-.06,-.07,.06,-.29,-.07,-.03,.2,.09,-.04,-.17,-.01,.49,0,-.14,.24,-.03,-.2,-.15,.22,-.08,-.04,0,-.02,.07,.33,-.09,-.15,-.12,-.02,.03,-.03,.05,.01,.01,.33,.07,.04,.07,-.08,-.05,.04,-.05,-.08,.27,-.02,.04,-.2,-.06,.08,-.03,-.08,-.22,.09,.07,.14,.15,.13,.03,-.05,-.06,0,.1,.06,-.04,.13,-.1,-.36,-.01,-.52,.14,.05,.18,.02,-.09,.08,.18,.03,.06,.1,.17,-.12,-.23,-.12,-.01,.09,.01,.1,.11,.12,.07,-.02,.04,.13,.01,-.06,.06,-.03,.12,.14,0,-.07,-.1,.08,0,-.04,-.2,.08,.08,-.02,-.1,.04,-.09,.07,-.04,-.06,.03,.11,.09,.44,-.43,-.06,.06,.09,.23,.07,.1,.09,.04,-.07,-.02,.02,.73,-.16,0,-.32,.02,.05,.09,.07,.2,.13,.04,-.16,.13,.02,.02,-.05,.02,.01,-.01,-.08,.01,-.14,-.17,.11,-.2,-.04,.01,.41,-.03,-.05,-.32,-.05,.09,.11,-.01,-.02,-.07,.03,-.17,0,.06,.01,.05,.08,-.03,-.04,-.04,-.05,.17,.22,.02,.14,-.1,.12,-.03,-.06,-.16,-.14,.01,.12,.2,.02,-.22,-.01,.05,.08,.12,.43,-.03,.17,.04,.05,.06,.08,.05,-.14,-.09,-.06,.05,.13,.12,-.1,.21,.14,.13,.03,.11,-.13,.01,.1,-.03,-.25,.23,.12,-.05,.65,.65,.14,.21,-.01,.14,.06,-.4,.15,.14,.05,-.28,.01,-.01,.25,.01,-.06,.06,-.1,-.08,.07,.07,.13,.01,.42,.06,.11,-.6,.07,-.05,.17,-.06,-.11,.01,-.01,-.05,-.01,.12,-.16,.08,-.01,-.03,-.11,.03,.3,.47,-.22,-.63,.27,.01,-.03,.09,.06,.03,-.12,.07,-.02,.03,.63,-.14,.38,-.04,.01,-.48,.23,.08,-.21,.3,.12,.07,.01,.14,.06,-.16,.14,-.02,-.32,-.14,-.04,-.05,-.05,.24,.03,-.47,-.15,.06,.02,-.36,-.05,0,.73,0,.05,.44,.04,.18,0,.26,-.1,-.19,-.1,.6,.25,.13,-.08,.18,.07,0,.2,.09,.08,.08,-.02,.09,-.65,.02,.08,-.04,-.11,.22,.34,.03,.36,.02,.08,.08,0,0,.18,.12,-.01,-.11,.65,-.24,-.13,.55,.02,-.25,-.02,.04,-.1,.15,.08,.23,-.19,-.05,.03,-.08,-.25,-.13,-.02,.06,.33,.06,.07,-.1,.11,.4,.04,.09,.02,.26,-.3,.06,.29,-.01,.11,.06,.54,-.02,.22,.01,0,-.03,.06,.04,.06,-.1,.12,.02,.19,.33,.1,.26,.03,-.04,.08,0,-.05,.03,-.12,.03,.06,.04,.13,-.1,0,.7,.07,.1,-.15,.07,.13,-.06,.02,-.05,-.05,.04,.18,.04,.1,.17,.1,-.1,-.09,-.02,.22,.18,-.39,.56,-.31,-.03,.03,.05,.69,-.19,.05];export{a as rvalData};
