const a=[-.19,.14,.28,-.17,.31,-.18,.19,.1,.04,.37,-.05,.1,.01,-.23,.03,-.05,0,-.16,.03,-.05,-.19,-.53,.18,-.08,-.01,.21,-.37,.2,-.17,-.36,.24,-.37,.2,.01,-.4,-.02,.18,.04,.4,.32,-.02,.24,.22,-.08,.18,-.01,-.05,-.42,-.65,.66,.34,-.23,.22,.25,.44,.17,.02,.07,.17,.07,.43,.34,.45,-.03,-.43,-.54,.27,-.03,-.08,-.08,0,.18,.4,-.21,.23,.05,-.23,.4,.32,-.62,-.29,-.01,-.02,.13,.03,-.55,.07,-.05,-.29,.15,.43,.11,.27,-.08,-.04,-.01,-.22,-.22,-.18,.36,-.02,.39,.45,-.07,.49,.11,-.08,-.06,.09,.4,-.01,.64,.25,-.26,-.15,.11,-.08,-.59,-.5,.05,.03,-.16,.18,-.16,.06,.5,.23,-.54,-.43,.19,.21,.01,0,.78,-.09,-.4,.44,.24,-.42,-.28,.36,-.14,.31,.09,-.13,.13,.08,-.26,.24,-.14,.36,.28,-.07,.08,.2,.25,-.26,-.07,-.04,.01,.33,.36,-.08,.31,.23,.38,.11,-.53,.06,.09,-.16,-.57,.16,.13,.16,-.71,.05,-.41,.38,.19,-.2,-.05,.04,.3,.35,.11,-.06,.08,.44,-.04,.01,.23,-.05,.34,.41,.2,.34,.19,-.23,-.4,.22,.29,.24,-.14,-.16,.36,.14,.42,.41,.12,.23,-.05,.03,.1,.03,.22,.1,.19,-.65,-.22,.07,.44,.26,.24,.11,.22,.29,-.5,.34,.21,.14,-.1,.06,.35,.16,-.14,-.09,.02,.22,-.01,.61,-.06,.19,.29,.19,.19,.02,.21,-.24,.01,.37,-.3,.47,-.1,.28,-.05,.04,.11,.34,.28,.07,.37,.23,.34,-.24,.48,-.28,.17,-.01,.15,-.17,-.01,.22,.52,.21,.04,-.43,.42,.45,-.66,.49,-.26,.11,-.14,.22,.22,-.17,.13,.39,-.45,-.02,.45,.24,.27,.15,.2,.08,-.18,.1,.35,.12,.22,-.28,.09,.22,-.01,-.28,.58,.1,.11,.22,-.02,-.05,-.2,-.09,.35,.49,.5,.49,.59,.22,.09,.01,.29,.53,.23,.15,-.2,-.12,.21,-.36,.12,-.1,.02,-.37,-.07,-.62,.11,-.03,-.36,.54,.19,.05,-.08,.23,.37,.19,.31,.32,.29,.38,.29,-.05,.21,.02,.15,.2,-.1,.51,.28,.03,0,.12,-.12,.06,-.22,-.07,.24,.35,-.03,-.62,.04,.13,-.11,.25,.38,.08,.11,.05,.33,-.13,0,-.01,.07,-.04,.03,-.14,.01,.28,.28,.51,.09,.12,.15,.13,.26,-.41,-.02,-.22,.09,-.03,-.08,.45,.18,.34,-.07,.01,.48,.31,.04,.51,-.3,-.19,.52,.21,-.01,.33,-.05,.49,-.37,-.03,.21,-.49,.2,-.17,.18,.21,.09,.2,.28,.18,-.14,.02,.04,.47,.34,.07,.22,.28,.3,.35,.17,.3,-.13,.85,.27,.22,.22,0,-.39,.31,.42,-.31,-.09,-.12,-.29,-.64,.26,-.07,.28,.38,.34,-.32,.35,.01,-.17,-.09,.09,-.21,.29,0,.22,.07,-.11,.41,.15,.43,.39,.21,-.37,.37,.13,.12,.21,.79,-.14,.34,-.01,-.29,.36,.03,.1,-.07,.19,.3,.13,.56,-.03,.15,.27,.27,-.2,.42,.08,.35,-.04,-.19,.11,.18,.49,.35,-.04,.33,-.02,.83,-.76,.29,.36,.39,.09,-.14,.28,-.09,.05,.11,-.17,.28,.13,.29,.27,.35,.55,.1,.39,-.13,.12,.3,.05,-.33,.09,.12,.48,.02,-.35,-.46,0,-.11,-.37,.6,-.09,-.2,.23,.42,.37,.46,.01,-.31,.22,-.25,.07,.49,-.49,.06,.09,.08,.1,.16,.07,.35,.04,.39,.38,.17,.18,.15,.3,-.05,-.42,.53,-.15,-.49,.06,.32,-.1,.58,-.04,.22,.31,-.5,.17,.06,.12,.13,.41,.12,-.25,.18,.35,.09,.31,.1,.27,.28,.45,.22,-.44,.44,-.42,.07,-.1,-.12,.08,.15,.24,.24,.1,.25,.21,-.06,-.04,.23,.02,.23,0,.1,-.11,.31,.18,.28,.14,.08,-.17,-.02,.47,.07,.6,.14,.49,.05,-.42,.1,.1,-.47,.15,.14,.29,-.24,.29,-.08,.59,-.24,-.33,.3,.25,.14,.13,.11,-.19,-.06,.04,.24,.23,.22,.39,.04,.02,.09,-.04,.14,.14,.26,-.08,.06,-.37,.46,.37,.41,.27,-.27,-.13,-.06,-.37,.14,.19,-.04,.12,-.15,.27,.2,-.06,-.02,-.2,-.1,.09,-.05,-.07,.11,.02,.54,-.32,.15,.08,.27,.3,-.08,-.09,-.06,-.16,-.05,-.43,.25,.34,.39,.24,.19,-.04,-.05,.18,0,-.21,.12,.2,.15,.1,.01,-.09,-.04,-.6,-.2,.32,-.34,.5,.24,-.06,.42,.46,.16,-.06,.11,.15,-.15,.1,-.55,-.4,.07,-.18,.14,.16,.19,.39,-.16,-.54,-.07,-.06,.26,.3,-.36,-.3,.08,.07,.05,-.45,.06,.31,-.26,.26,.34,.1,-.36,-.19,-.07,.07,.28,-.1,.42,-.16,.44,.16,.26,.48,.24,-.17,.11,.3,.35,.32,.3,.36,-.46,-.34,-.71,.03,.32,.06,.17,-.49,.33,.29,-.36,.32,-.05,.19,-.27,.35,.07,.07,.28,-.4,.4,-.01,-.1,-.18,.3,-.73,.27,.23,-.15,-.66,-.1,.17,-.04,-.09,.12,.26,.03,.22,-.16,.3,-.21,-.07,-.25,.24,.07,.02,.04,-.11,.07,.27,.06,-.61,.29,.06,.06,.27,-.41,.38,-.02,-.47,.46,-.07,-.08,-.63,.23,0,-.02,.05,.36,.44,.23,-.55,.33,.32,-.32,0,-.24,.19,-.29,-.17,.16,.22,-.15,-.07,.13,.41,-.05,.4,-.12,.29,.01,-.06,-.37,.32,-.02,.37,.23,.12,.14,-.18,.29,.2,.34,-.11,-.21,.38,.21,.06,-.2,.07,.35,.23,-.05,.1,-.1,-.12,-.18,.16,-.07,.47,-.22,.48,-.15,-.43,-.69,.21,.47,-.1,0,.3,.2,.01,-.04,-.08,.02,.05,.29,.33,.05,.29,.16,.43,.26,.42,.06,.22,.26,-.31,.44,-.08,.37,.25,-.18,-.17,.2,.22,-.2,.23,.18,.16,-.01,-.03,.19,-.09,-.15,-.33,.34,.12,.28,-.11,.23,-.17,.06,.03,.2,.03,.21,.09,.04,.14,-.36,-.09,-.24,-.26,-.12,-.24,.06,.14,.02,.22,.43,.11,.35,.18,-.62,.17,.28,.22,.34,-.12,-.1,.36,.58,.25,.43,.27,.12,.24,-.11,-.09,-.15,.16,.05,-.05,.09,.03,-.14,-.18,-.17,.01,-.12,-.09,-.15,.36,.23,-.28,-.08,.1,.33,.09,-.25,-.07,.29,.24,.2,.45,.11,.04,.41,-.02,-.07,-.11,.41,.04,.08,.19,-.02,.55,.13,.17,.06,-.14,.16,.26,-.31,.01,.09,.4,-.09,.02,-.05,.25,.52,.35,.27,.36,-.03,-.11,-.12,.05,.02,.05,-.24,-.2,.2,-.13,.63,.06,-.59,.21,.38,.07,.31,.23,.13,.26,-.38,.14,.32,.28,.16,.29,-.14,-.58,.06,-.04,.39,-.39,.16,0,-.52,.08,-.19,-.26,.37,-.53,.35,.33,.11,-.12,.21,.18,-.07,-.38,.31,.11,.13,.05,.27,0,.22,-.23,-.03,.45,.48,.09,-.72,-.28,.07,-.06,.14,.14,-.38,.04,-.18,.03,-.18,-.12,-.06,-.02,.4,0,.18,.25,.33,.06,-.09,.29,.18,-.04,-.14,-.35,.1,-.46,.1,.03,.29,-.15,.01,.29,.26,.1,.05,-.53,.31,.13,.11,.28,-.18,.13,.1,-.12,-.01,.24,-.28,.43,.11,-.07,.31,.26,.33,.55,.55,-.1,-.23,.2,.52,-.04,.16,0,.11,.03,.28,-.13,-.15,.39,-.15,-.08,.3,.15,-.19,.37,-.08,-.04,-.24,-.26,.24,-.11,.05,.31,.33,-.41,-.48,.18,-.02,.39,.16,.37,-.19,.35,.34,.29,.31,-.15,.12,.32,.16,.05,-.24,.19,.38,.16,-.11,.27,-.01,-.16,-.12,.39,.09,-.37,.04,.37,-.45,.34,.43,-.15,.25,.25,.19,-.08,-.06,-.14,.16,.23,.28,-.05,-.15,.06,-.14,-.06,.24,-.13,.22,-.05,-.17,.38,-.06,-.06,.33,-.07,.13,.28,-.36,.16,.01,.12,-.16,.33,-.37,-.49,.33,-.13,.25,.02,.27,-.3,.12,.19,0,-.16,.24,-.11,.29,-.13,.15,.27,-.13,-.16,.26,-.01,-.06,-.04,.41,.14,.37,.41,.14,.2,-.3,.32,.25,.56,.05,.06,.06,-.07,-.06,.05,.34,.01,.24,-.01,.43,.24,-.23,.26,-.16,.22,.33,.13,.21,-.15,.25,-.16,-.05,.05,.28,.06,.26,.34,.46,-.32,-.02,.38,.28,.26,-.11,-.22,-.01,-.1,-.01,.47,.28,.02,-.24,-.18,.12,.1,.02,.43,-.21,-.12,.41,.26,.36,.32,.08,.22,.39,.46,.1,.41,.15,.22,.06,-.08,.16,.08,.46,.44,-.09,-.11,-.34,.03,.32,.29,.52,-.14,-.16,.1,.22,-.04,-.28,-.02,.06,-.11,.31,.42,.42,-.03,.48,.37,.11,.26,.22,.47,.18,-.4,.3,-.03,.27,-.23,.43,-.02,-.02,.42,.19,.02,-.25,.5,-.29,-.02,.44,.42,.12,-.05,.15,.15,.22,-.39,.22,-.26,-.32,.02,-.49,.17,-.02,-.03,.33,.01,-.1,.06,-.22,.16,.39,.47,.32,.09,.03,-.2,.43,.05,.51,.05,.19,.21,-.13,.24,.06,-.37,.16,.01,-.28,.17,.05,.05,.34,.24,.17,.14,-.36,.17,-.07,.26,-.05,-.6,.4,.35,.1,-.17,.24,.26,.39,-.13,-.02,-.52,.44,.02,.41,.26,.45,.13,.02,.26,.08,.23,.32,.24,.44,-.03,0,.41,.15,.27,.33,.63,.01,.37,0,.1,.1,.08,.03,.1,.33,.23,-.15,.46,.3,.2,.46,-.12,.2,.05,-.29,.65,-.01,-.05,.35,-.02,.45,-.06,.47,.48,.37,.4,.04,-.08,.38,-.18,-.01,-.7,-.11,.15,.51,-.08,.5,.05,.49,.2,.36,.25,.35,.56,.53,.49,.42,-.14,.14,.41,.21,.03,.22,-.31,.32,.64,-.23,.46,.18,.15,.28,.34,.03,-.17,.45,.34,.08,.51,.3,.9,-.06,-.02,.41,.54,-.02,.23,-.12,.32,.63,-.56,.58,0,.26,.17,.51,.15,.59,.39,.52,.16,.44,.17,.44,-.63,-.41,.56,.14,.36,.08,.67,.19,.04,-.39,.01,-.11,.21,.25,.4,0,-.54,.19,.21,.39,.43,.21,.15,.25,.17,.37,.31,.45,.37,-.06,.27,-.01,.46,.06,.57,-.02,.05,.1,.04,.23,-.1,.28,.19,.65,-.02,.68,.52,.21,.29,.23,.2,-.04,.01,.2,.74,.28,.08,-.15,.18,.77,.25,-.19,.62,-.04,-.12,.65,.26,.21,.46,.26,.21,.2,.46,.38,.62,.35,.48,.59,.52,-.16,.42,-.07,.18,.29,.02,.43,.02,.36,.41,.04,.24,-.27,.27,-.25,.76,.21,-.04,.38,.13,-.13,.67,-.1,-.08,.24,.35,.25,0,.29,.3,-.11,.12,.21,.09,.13,-.09,-.09,-.24,.1,.03,-.42,-.15,.94,1,.68,.25,.3,.17,-.12,.17,.57,-.51,.19,-.35,.25,.26,.28,-.26,-.19,.03,-.06,.02,.31,.37,.38,.36,.13,.34,.73,.25,-.16,.18,-.05,.01,.49,-.18,.37,.27,.2,.29,.12,.42,.09,.27,-.26,.06,.12,-.22,-.04,0,.17,-.45,-.09,.11,-.12,-.05,-.02,-.06,.31,.39,.23,.13,.24,-.15,.5,-.02,-.34,-.54,0,.26,.25,.32,-.04,.09,.21,-.2,.19,.5,.28,-.12,.26,.13,.29,.46,.43,.21,-.03,.41,.23,.43,.37,-.62,-.01,-.07,.19,-.19,.5,-.02,.16,.15,.43,.34,.25,.2,.36,.11,.32,-.03,-.2,.35,.33,-.01,.07,.17,.19,.32,.12,.46,-.06,.41,.3,.35,.07,.04,.03,-.14,-.07,.02,.16,.2,.14,.23,.2,.06,-.2,.38,-.18,-.21,-.09,-.35,.28,-.02,.34,.16,.45,.02,.39,-.03,-.02,-.22,0,.23,.09,.46,.35,.34,.21,.11,.3,-.46,.14,-.14,.21,.34,.32,.43,.02,.06,-.13,.29,.02,.01,-.14,.06,.33,.26,.16,.2,-.1,-.39,.22,.41,.46,-.05,.05,-.17,.15,.24,.26,.23,.34,.06,.43,-.21,.36,.31,-.52,.27,.21,.43,.07,.11,-.39,.31,-.33,-.03,-.25,.32,.1,0,.17,.19,.01,.38,-.21,-.09,-.08,.36,-.27,-.03,.39,-.07,.04,.04,.19,.12,-.2,-.18,.46,-.14,.21,.27,.31,-.47,.32,.34,.21,.09,.18,.32,.29,.43,.24,.3,-.49,.09,-.04,.01,.37,.13,.16,.1,-.18,.19,.14,-.03,.23,-.04,.04,-.36,-.24,-.07,.03,.11,.22,.38,.31,.6,-.09,.49,.13,-.39,.26,-.17,-.14,.38,.12,.24,.15,-.35,.26,.25,-.3,.37,.49,.19,.29,.27,.24,-.25,.22,.28,.29,.01,.38,.02,.29,.4,.16,.17,.31,.09,.23,.21,.24,.21,-.48,.22,-.2,.41,-.17,.2,.22,.18,.27,.34,.1,.37,.11,.18,-.22,.15,-.13,.25,.03,.15,.31,.19,.35,.36,-.28,-.1,-.64,.43,.3,.15,.19,.29,.24,-.38,-.45,-.07,-.34,-.27,-.04,.19,-.16,-.03,.15,-.15,0,.4];export{a as rvalData};
