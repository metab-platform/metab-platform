const a=[.19,-.08,.07,.07,0,.12,-.05,-.23,-.23,-.04,.36,.18,-.11,.12,.29,.01,.18,.1,-.01,.08,.06,.41,-.1,.39,.06,-.12,.47,.1,.26,.46,-.18,.48,.05,.03,.34,-.04,.11,.15,-.3,-.14,.06,-.1,.24,.07,-.34,.1,.1,.52,.66,-.73,-.14,.19,.17,-.08,-.32,.12,.1,-.03,-.28,.02,-.21,-.13,-.26,.03,.46,.62,-.09,.27,.16,-.01,-.06,.02,-.35,.3,-.03,.15,.17,-.22,-.2,1,.12,.05,-.13,-.09,.2,.48,.06,.01,.14,-.12,-.16,-.03,-.31,-.22,.27,-.19,.03,.22,.21,-.25,-.1,-.17,-.39,-.1,-.52,-.14,-.1,-.12,.16,-.43,-.03,-.56,-.32,.06,.31,-.06,.3,.55,.47,-.04,-.26,.29,.17,-.13,-.02,-.52,0,.25,.6,.06,-.28,.05,-.06,-.67,.3,.04,-.42,-.41,.62,.26,-.14,.14,-.26,.08,.19,-.07,0,.26,-.06,.02,-.14,-.17,-.07,.07,-.26,-.09,.18,.29,.16,.24,-.37,-.39,-.11,-.43,-.24,-.36,-.05,.79,-.14,-.09,.2,.72,-.21,-.27,-.15,.71,-.06,.39,-.5,0,.04,.09,-.04,-.07,-.39,-.18,.11,.16,-.3,.26,.1,-.19,.06,-.29,-.23,.11,-.3,.01,.16,.44,-.09,-.08,.02,.14,.03,-.07,-.04,-.61,-.35,-.28,-.29,.2,.26,.12,-.01,-.2,-.14,-.16,.7,.1,-.12,-.49,-.21,.02,-.16,.04,-.34,.66,-.13,-.42,-.19,-.09,.15,-.03,-.13,.23,.26,.11,-.19,.09,-.54,.26,-.21,-.36,-.13,-.09,.16,-.31,.19,.08,-.44,.19,-.35,-.01,-.05,-.03,-.09,-.14,-.34,-.06,-.01,-.19,-.14,-.13,.08,-.51,.38,-.09,.06,-.08,.36,-.12,.04,-.14,-.32,-.1,.55,-.42,-.06,.63,-.49,.16,-.01,-.02,-.33,.01,.2,.13,-.42,.44,-.1,-.53,.01,-.08,-.27,.25,.24,.3,-.23,-.27,.05,.1,.51,-.22,.03,0,.08,-.51,-.19,.2,-.06,-.08,-.1,.21,.13,-.27,-.61,-.23,-.14,-.46,-.19,.16,.26,-.14,-.62,-.4,.1,.09,-.02,-.43,.11,-.13,.13,-.07,.34,0,.77,-.05,.11,.27,-.34,.23,-.06,.08,.07,-.01,-.1,-.37,.19,-.42,-.28,-.41,.19,-.35,.01,.02,-.35,.24,-.18,-.05,-.06,-.17,-.3,-.06,.05,-.07,-.04,.05,-.05,-.06,.58,-.06,-.25,-.08,-.06,-.17,.08,-.09,-.02,-.31,.13,.05,.09,-.04,.02,-.07,.27,.06,-.04,-.02,-.13,-.26,.02,-.14,-.09,.09,.31,-.1,.04,-.06,.24,-.04,-.11,-.27,-.38,.13,.28,-.15,-.33,-.07,-.15,.01,-.17,-.15,-.01,.02,-.17,.25,-.48,0,.13,-.01,.38,-.26,-.06,.07,.04,-.16,-.29,-.27,-.25,-.08,-.05,.14,-.46,-.1,.18,.01,.06,-.12,-.27,-.12,-.2,.11,-.61,-.08,.08,.03,-.18,.36,.02,-.57,.08,-.01,-.08,.11,.52,.04,0,-.25,-.13,0,.1,-.37,-.03,.06,-.04,.13,.26,-.07,-.11,.08,.22,.14,-.4,.12,.09,-.22,.09,.28,-.28,.14,-.07,-.21,-.64,-.11,-.31,-.28,.38,-.08,.08,.16,-.12,-.24,.03,.05,-.75,-.06,0,-.28,-.23,.01,-.22,-.04,-.22,-.12,.32,.12,.08,-.21,-.16,-.18,-.16,-.1,-.62,.54,-.1,-.36,-.38,-.07,.36,.09,.13,-.16,-.11,.23,-.16,.07,-.23,.09,-.47,-.76,-.15,-.48,.25,.02,-.23,.24,.04,.14,.01,-.23,-.13,.38,.68,.04,.09,.39,-.35,.03,.2,.04,0,-.12,-.32,-.06,.2,-.19,.12,-.05,-.35,.35,-.39,-.29,-.21,-.25,-.14,.05,-.19,.05,-.16,-.03,-.07,-.25,-.13,.08,-.03,.34,-.53,.03,.73,.21,-.31,-.06,-.53,.28,.12,-.28,.36,.1,-.19,.11,-.05,-.22,-.29,.1,.01,-.06,.01,-.06,.14,-.07,.02,-.24,-.02,.46,-.24,.48,.15,-.03,-.02,.13,-.22,-.18,-.33,-.12,.1,-.08,.08,.25,-.17,-.08,-.08,-.01,-.22,.35,-.1,-.12,-.17,-.18,-.09,.11,.08,-.47,.06,-.44,.14,-.46,-.16,.44,-.2,.1,.39,.17,.2,-.12,-.08,-.22,-.14,-.54,.23,.18,-.31,.12,.12,.06,-.01,.16,-.17,-.05,.1,.23,-.03,-.11,.02,.1,.02,-.16,-.1,.01,-.34,.29,-.1,.41,-.27,-.27,-.35,-.04,.18,.1,-.12,.09,.04,-.07,0,.04,.08,-.18,.02,-.15,.11,.13,-.03,-.25,.06,-.17,.17,-.14,-.32,.26,-.13,-.16,-.24,-.01,.15,.08,.13,.25,.11,.46,-.03,-.43,-.27,-.01,-.11,.07,-.15,.07,-.03,-.02,-.13,-.1,.12,-.01,.13,.2,.05,.54,.22,-.12,.34,-.22,0,.12,-.36,-.44,.14,.08,.21,-.19,.15,.2,.42,.41,-.19,.09,-.33,.1,-.28,-.38,.23,.39,.24,.05,-.24,.02,.09,.48,.24,.02,.27,.59,.18,-.11,.44,.1,-.19,-.18,.3,.07,-.11,-.19,-.02,.21,-.38,.25,-.47,-.2,0,-.21,-.02,.33,.06,-.17,-.05,-.27,-.39,-.24,.35,.3,.55,-.16,-.28,.2,.01,.73,.05,-.23,.15,-.3,-.11,-.05,-.09,-.1,.12,-.16,.08,.18,-.16,0,.1,.1,-.03,.52,-.21,-.33,-.12,.65,.13,.07,.22,.01,-.31,-.1,-.07,.05,.11,-.07,.19,.18,-.02,.01,-.26,.08,.03,.14,.05,-.32,.05,.52,.06,.1,-.25,-.4,.4,-.18,-.09,.41,-.35,.12,-.03,.69,-.36,0,.17,-.1,-.08,-.23,-.26,.58,-.24,-.01,.06,.05,.07,-.18,.3,.21,-.24,-.28,-.04,.19,-.12,-.38,-.04,-.18,.21,-.21,.11,.17,.42,.18,.01,-.18,.02,-.26,-.17,.12,-.02,-.06,-.19,-.19,.03,-.33,-.04,-.19,.16,-.16,-.04,.04,.11,-.06,.01,.07,.26,.09,.14,-.44,.2,-.58,.14,.42,.61,-.19,-.27,0,0,-.31,-.36,-.07,-.02,.14,-.12,.14,-.04,-.01,.14,.06,-.19,-.14,-.21,-.04,.08,-.03,-.09,-.03,-.46,-.04,-.17,-.09,.32,.04,-.15,-.15,.01,.07,-.24,.04,.15,.07,-.19,.03,-.09,.12,-.35,-.05,-.12,.03,-.09,.21,.16,-.04,-.03,-.03,-.22,.01,-.11,-.17,.14,-.02,-.01,.11,.4,.04,-.15,-.04,-.32,-.37,-.52,.17,-.05,-.28,.5,-.18,-.08,-.24,-.28,.2,.26,-.34,-.45,-.22,-.49,-.15,-.22,-.43,.07,-.07,-.03,.02,-.01,-.09,0,.01,.19,.38,.22,.12,.04,.21,.26,-.25,-.27,.18,-.09,-.02,.02,-.1,.03,.06,-.17,.02,-.03,-.32,.01,-.2,-.15,.02,.21,.16,-.47,-.17,.24,-.32,-.09,-.28,.15,-.22,.09,-.04,-.17,.1,.16,-.17,-.02,-.37,.15,-.01,.19,.06,-.41,.06,-.02,-.24,-.02,.11,.08,-.05,-.06,.16,.17,.33,-.14,.14,-.56,-.26,.84,-.1,.06,-.09,-.41,-.29,.01,-.04,.11,.06,.03,-.35,.08,-.06,.18,.52,.11,-.22,-.29,.18,-.12,-.07,.37,-.02,.12,.04,-.06,.47,-.09,-.33,-.32,-.09,.03,.15,-.16,.16,-.43,-.16,-.01,-.21,.2,-.05,.08,-.01,-.09,-.43,-.47,-.13,.52,.18,-.02,.11,-.32,.02,.3,.2,.25,.06,.14,.06,-.03,.06,-.18,.03,-.33,.05,.03,-.13,.09,-.03,0,-.16,.21,.04,.07,.43,-.08,.07,-.13,.19,.19,-.03,.08,-.1,-.01,.24,-.28,-.05,-.07,-.35,.21,-.24,.1,.26,.01,-.19,.15,-.44,.13,.01,-.03,-.12,-.3,-.26,-.74,.37,.14,-.36,-.47,.01,.11,.02,-.26,-.18,-.31,.07,.18,-.42,-.08,.14,0,.14,.26,-.1,.05,-.01,.12,.04,.02,.34,.01,-.13,-.17,.3,.7,-.1,.15,-.06,-.21,-.26,-.08,-.01,-.35,-.34,.06,.21,-.33,-.42,-.01,-.35,.16,-.13,-.17,-.06,.21,-.11,.04,.18,.16,-.11,-.05,.26,-.1,-.13,.5,-.44,-.22,.21,.01,.13,-.24,.13,.08,.19,.14,-.11,.01,.03,.19,.02,.24,.05,.04,.2,-.17,-.05,-.07,-.12,.22,-.14,-.33,-.01,-.17,-.14,.2,.12,-.17,-.34,.04,-.28,.42,.67,-.19,.25,-.07,.01,-.23,.43,-.06,-.16,.28,.28,-.31,-.08,-.3,.08,.05,-.38,.06,.2,.11,.04,-.07,.09,-.39,.01,-.22,-.31,-.15,-.47,.09,-.12,-.18,-.52,.15,-.08,-.08,-.08,.11,.18,-.28,-.14,.04,.14,-.63,.07,.03,-.44,-.06,.08,-.33,-.03,.08,.16,-.24,-.04,-.09,-.01,-.34,-.36,-.1,-.2,-.25,.26,.07,.03,-.42,-.21,-.01,.19,-.19,.09,-.08,-.19,.05,-.25,-.17,.28,-.05,-.24,.1,-.32,.23,.1,-.52,-.41,-.21,-.3,-.26,-.3,-.61,-.5,-.09,-.51,-.13,-.19,-.21,.13,-.13,0,-.24,-.55,-.14,.04,.25,.1,-.29,.09,-.6,.21,.1,-.17,-.12,.01,.09,0,-.01,.11,-.24,.08,-.38,-.06,-.44,-.23,-.07,-.18,-.25,-.49,.08,.35,-.35,.09,.07,.07,-.47,.06,.29,-.05,-.18,.27,-.05,-.52,.3,.07,-.2,-.13,.04,.02,-.16,.16,-.27,.35,.09,.18,.55,.02,.23,-.23,.33,-.02,-.04,-.15,.07,.08,.15,-.12,-.22,-.25,-.25,.07,.07,.27,-.31,-.02,-.26,.09,-.28,-.09,.16,-.33,-.04,.26,-.1,.05,.1,-.1,.22,-.05,-.14,-.13,-.11,-.43,.29,-.1,.06,-.51,.24,.54,-.33,-.23,-.07,-.02,-.1,-.07,-.46,.05,-.03,.37,-.32,.03,-.32,-.17,-.41,-.24,-.1,-.27,-.12,-.27,-.35,-.09,-.4,.12,-.09,-.43,-.32,.01,-.41,-.7,-.02,-.1,0,-.06,-.04,.09,.11,.06,-.09,-.31,.24,-.37,0,-.27,-.19,.3,-.05,-.07,.33,-.59,-.31,-.02,-.25,-.09,-.32,.13,-.27,-.2,-.39,-.22,-.06,-.02,-.17,.27,-.01,.62,-.03,-.1,-.63,-.11,-.33,0,-.3,.01,-.34,.1,-.1,-.6,-.2,-.36,-.18,-.05,-.4,-.55,-.22,.23,-.22,.14,-.3,-.39,.23,-.2,-.16,.13,-.18,-.4,0,.23,-.27,-.45,-.26,-.5,-.21,-.62,.3,.28,-.12,-.16,-.12,-.15,.19,.13,-.71,.49,-.52,.22,-.43,-.03,-.14,-.17,-.46,-.28,-.46,.14,-.06,.03,-.2,.53,.39,-.59,-.3,-.49,.19,-.67,-.19,.18,.1,-.12,-.02,-.34,-.04,-.04,-.1,.21,.09,-.22,-.36,-.02,-.3,-.33,-.19,-.12,-.39,-.29,-.56,-.28,.06,-.21,-.14,-.32,-.22,-.8,.13,.01,-.25,-.37,.06,-.01,-.13,-.07,-.58,.09,-.75,-.24,-.04,-.23,-.06,-.14,-.1,-.03,-.19,-.59,-.08,-.02,.03,-.15,-.54,-.24,.33,-.38,-.07,.09,-.58,-.22,-.21,-.71,-.21,.1,.12,-.2,-.06,-.44,-.05,-.49,-.48,-.67,-.05,-.38,-.08,-.21,-.33,-.13,-.32,-.2,0,-.3,.11,-.22,.12,-.19,.39,-.67,-.3,.25,-.26,-.33,.08,-.75,.09,.19,-.2,-.11,.07,.24,-.36,-.19,.41,.12,-.1,-.15,.12,.23,-.01,.15,-.03,.2,.15,.06,-.64,-.62,-.82,.11,-.01,.17,.15,.08,-.43,.52,-.28,.38,-.18,.11,.06,.15,.07,-.1,.12,.01,-.3,-.04,-.25,.06,-.38,-.36,-.67,-.06,.2,-.23,-.05,-.07,-.16,.33,0,-.11,.07,.03,.04,-.47,.09,-.22,.39,-.02,-.18,.12,.14,-.18,-.2,.16,.15,-.16,-.05,0,-.14,.26,-.39,-.4,-.3,.01,.12,.01,-.09,-.06,.41,.45,-.17,-.02,.09,-.03,.11,.17,-.15,.12,-.25,-.61,-.15,-.01,-.04,.07,-.12,-.44,-.56,-.22,.26,-.47,-.21,-.09,-.18,.64,-.1,.13,-.03,.25,-.37,.15,-.11,.15,-.19,-.07,.1,.1,-.12,-.03,-.26,.01,.05,.06,-.18,-.14,-.15,.1,.2,-.28,-.26,-.28,.16,-.24,-.03,-.22,-.04,.09,-.19,.18,.14,.33,-.28,0,.02,.01,-.25,.06,.18,-.35,-.12,.11,.07,.31,-.03,-.08,-.26,-.01,-.27,.11,-.27,.02,-.19,.35,-.09,.01,-.11,-.56,-.41,-.23,-.02,.01,-.13,.31,-.11,.24,.05,-.32,-.34,-.45,.05,.12,-.02,.02,.01,-.27,0,-.07,-.3,-.28,.08,-.08,-.01,.28,-.16,-.44,-.17,.14,-.19,.08,-.15,.08,-.3,-.03,-.19,-.07,-.13,.22,-.08,-.17,.56,-.42,-.37,-.48,-.09,-.19,.24,.08,.31,-.03,.2,.04,-.26,-.04,-.08,-.29,-.24,-.35,.03,.18,-.04,-.18,.3,.13,-.21,-.05,.05,-.06,-.1,.05,.22,.26,-.19,0,.1,.07,-.14,.64,-.08,.03,.03,-.1,.03,-.27,-.34,-.38,-.12,-.22,.42,-.02,-.04,.05,-.13,0,-.25,.14,.09,.03,.12,.03,-.31,.11,-.02,.32,.27,.07,-.12,-.08,.08,-.16,.07,-.49,0,-.41,-.08,.53,-.12,-.08,.19,-.27,.15,-.1,.04,.18,-.25,-.02,.33,-.05,-.2,0,-.2,-.27,-.06,.14,-.08,-.03,.06,.24,-.32,-.01,-.16,-.16,-.17,-.21,-.06,.07,-.11,.08,-.11,.08,.71,.07,.39,-.26,0,.09,-.09,-.01,-.11,-.12,-.36,-.17,.05,.06,-.02,0,.18,.1,.02,-.08,-.22,-.16,-.13,-.16,.4,.03,.58,-.45,.06,-.41,.15,-.17,-.29,.15,.54,.06,.25,.41,.22,-.32,-.07,-.19,.06,.19,-.08,-.47];export{a as rvalData};
