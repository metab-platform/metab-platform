const a=[.17,-.23,-.34,.16,-.28,.39,.02,.4,-.11,-.14,-.51,.02,-.02,.17,-.6,.13,-.2,.14,.11,.14,-.02,.06,.13,-.61,-.29,-.16,-.22,.05,.32,-.37,-.02,-.06,-.3,.1,-.11,.07,-.54,-.63,-.08,-.49,-.18,-.24,-.08,.1,0,-.59,-.23,.13,-.1,.09,-.2,.24,-.33,-.32,.23,-.62,-.27,.27,.2,-.28,.12,-.3,-.15,.07,-.01,-.06,-.15,-.65,-.05,.07,-.05,-.45,.31,.08,-.28,-.07,-.11,.2,-.33,.04,.13,-.16,.04,-.11,.04,.04,-.13,.04,.28,-.37,.4,.04,.25,.3,-.15,.39,.12,-.15,.36,.3,-.01,-.17,.12,.03,.15,-.08,-.25,-.3,-.24,.05,-.11,.03,-.04,.23,.19,-.29,.11,-.01,.24,-.19,.02,-.01,-.09,.29,.15,.06,-.21,.68,-.07,-.5,.54,.35,.13,.01,-.3,.34,.32,.14,-.18,.21,-.09,.14,.09,-.14,.16,.1,-.05,.7,.06,.13,-.18,.07,.09,-.16,.46,.58,.16,-.07,-.14,-.65,.45,.2,.01,.19,.29,.24,-.25,-.12,.55,-.24,.15,.04,.54,.3,.09,.01,.15,-.32,.35,-.33,-.07,-.03,.05,-.57,.15,.3,-.17,-.01,.36,.13,.1,.42,-.01,.1,-.06,-.29,.15,.18,-.03,.08,-.45,-.16,-.46,-.04,.08,.11,.06,.46,.24,.12,.45,-.55,-.03,-.51,.25,.05,.05,.4,-.1,-.3,.34,.18,.13,-.32,.21,-.47,.51,-.08,.19,.26,-.13,.22,-.42,-.35,-.12,.12,-.53,-.62,.26,-.08,.05,-.6,.38,.45,.28,.2,-.07,-.13,.07,.01,.28,.15,.23,.39,-.05,-.07,.04,-.12,.03,-.44,-.31,.43,.04,-.09,.7,.16,-.1,-.01,-.29,-.27,-.08,-.04,-.44,-.41,-.21,.09,-.31,.22,-.34,-.06,.35,-.43,-.43,.21,.48,-.21,-.48,-.53,.38,.11,.33,.26,-.23,.11,.42,0,-.54,.05,-.01,.22,-.07,-.33,-.11,-.11,-.15,.06,.34,-.05,.75,-.65,-.16,.04,.11,.2,.39,.23,.26,.4,-.35,-.19,-.07,0,-.52,-.15,.23,.51,-.18,.46,.18,.5,.24,.17,.08,-.05,-.07,-.18,-.03,.26,.04,.06,.08,-.04,.08,.02,-.56,-.38,-.03,.51,-.13,.22,.03,.38,0,.51,-.2,-.44,.1,-.12,-.25,-.4,-.27,-.06,.58,-.2,.04,.29,.31,-.49,.27,-.13,.08,-.09,-.21,.61,.21,.3,.04,.03,-.18,.5,-.04,.11,-.12,-.08,.12,.11,-.09,.04,-.24,-.3,-.3,.08,-.22,-.06,-.14,-.35,-.06,.01,.5,.11,.06,.55,-.29,-.12,.3,-.02,-.47,-.22,.09,.24,-.38,.21,.48,-.3,.31,-.11,-.02,-.1,.36,.24,.15,-.43,.04,-.05,.15,-.44,-.45,-.07,.4,.28,.39,.64,-.16,.06,.46,-.53,.01,-.13,-.31,.06,.17,-.12,-.04,-.12,-.3,.28,-.43,-.17,-.04,-.06,-.16,.18,.28,.43,-.06,.57,-.04,-.48,.62,-.14,-.23,-.17,.2,.31,.13,.29,.16,.04,.06,-.37,-.38,-.53,-.23,-.19,.53,-.24,-.36,-.15,-.32,-.34,.06,-.58,.04,.23,-.31,.45,.36,.54,.06,-.32,-.14,.03,.22,.31,-.21,-.32,.28,-.17,-.14,.45,.45,.5,-.17,-.21,-.22,.29,.64,-.14,-.36,.21,-.03,.41,-.18,.29,-.38,.19,.22,.27,.32,.02,-.04,-.25,.31,.12,.2,.11,-.24,-.08,-.22,-.17,.44,.27,.01,.22,.15,.18,.41,.07,1,-.07,-.14,.39,.07,-.28,.03,.13,.31,-.29,-.42,.38,-.51,-.47,-.44,-.48,-.26,.04,.02,.29,-.04,-.04,-.37,.03,.3,.42,-.12,-.04,.08,-.15,.26,-.02,-.22,-.33,-.24,.12,-.03,-.44,.1,.21,.15,.07,-.02,-.12,.15,.5,.13,-.51,-.39,-.02,.09,-.56,-.06,-.02,-.07,-.21,.42,.28,-.14,-.39,.34,-.06,-.11,-.34,-.19,.06,-.13,-.21,.34,.25,-.17,.41,.05,-.55,.27,.41,.08,-.09,-.33,.21,-.22,-.08,.42,.25,.35,.03,.61,-.03,-.17,.47,.13,.2,-.04,-.36,-.07,.3,.14,-.03,-.24,.2,.28,-.06,.22,-.21,.02,.01,.03,-.02,.94,-.15,.09,.15,-.03,.17,.35,-.32,-.24,-.03,-.57,-.11,.17,-.03,-.33,-.01,-.34,.37,-.09,.01,-.11,.54,-.02,-.16,-.18,.07,-.15,-.36,.15,.4,-.07,-.33,.26,.08,0,.94,-.39,-.24,.68,.03,-.01,-.2,-.2,.51,.07,.3,.82,.03,.21,.31,-.23,.05,-.29,.25,-.07,.37,.19,-.28,.1,-.11,.07,.09,.01,-.18,-.17,.19,0,.07,.12,.12,.14,.14,-.15,.15,.32,.05,-.56,-.04,-.23,-.08,.03,-.01,-.01,.01,.08,.01,-.29,-.06,.1,.4,-.56,.16,.02,-.01,-.43,-.1,.13,-.27,-.08,.17,-.1,-.61,.24,.24,-.03,.22,.02,.26,-.36,-.09,.3,-.11,-.05,-.12,.03,-.12,-.16,.23,-.06,-.45,-.1,.16,-.16,.28,.85,.68,-.23,.12,.53,.11,.23,.19,-.3,.33,-.33,.06,-.11,-.06,-.31,.21,.25,.19,.42,-.17,.22,.51,.17,-.72,-.22,-.13,-.38,-.04,.31,.27,.09,-.07,.03,-.09,-.4,.18,-.09,.19,.32,-.07,.11,.2,-.31,.35,.02,.36,.12,-.12,-.11,-.29,-.21,-.01,.44,-.34,-.15,-.47,-.11,.14,-.07,0,.64,-.47,.46,.12,.15,-.18,-.1,.22,-.04,-.05,.06,-.31,.09,.41,-.21,-.15,-.39,-.09,.09,-.21,.23,-.02,-.07,.09,-.08,.18,.38,.36,.32,.13,.09,-.45,.3,.04,.91,.6,0,.16,.24,.34,.34,-.04,.06,.52,.78,.34,.28,.24,-.16,.16,-.24,-.39,-.03,-.24,-.56,.05,.65,.27,-.03,.25,-.24,.39,.22,.34,-.05,-.03,.06,.05,-.19,-.31,.1,-.13,.05,-.05,.14,-.32,-.09,.42,.04,.34,.19,-.25,.04,.27,-.16,.43,.13,.32,.46,-.04,.79,.08,.04,-.16,-.04,-.26,.15,-.48,.03,.37,.43,-.49,-.36,-.21,-.17,.27,.28,.12,-.01,-.14,-.16,.37,.43,-.19,.38,.07,.18,-.3,-.12,-.34,.3,.08,.54,.36,.36,-.25,-.16,.54,-.14,.28,-.22,-.06,.18,.14,.11,-.02,.03,.21,.32,.01,-.14,.7,-.6,.13,.07,-.36,.53,.6,.29,-.1,-.27,.48,.05,.35,.13,.33,.33,-.03,-.04,.38,-.05,.34,.46,.25,-.13,.62,-.05,.1,.1,-.02,.09,.08,.05,-.01,-.05,-.39,-.09,-.1,.1,.05,-.23,.15,.43,-.34,.63,.08,-.08,.22,.93,.02,-.1,.08,-.26,.23,-.19,.55,-.33,.09,-.08,-.03,.36,-.07,.06,.46,.17,.01,-.45,.31,-.21,-.06,.21,-.44,-.28,.03,-.09,.55,.01,.03,0,-.09,.16,-.27,-.01,.17,.03,-.02,.02,.18,.74,-.22,-.46,.01,-.15,-.22,.16,.36,-.07,-.25,-.45,.08,.27,.2,.42,-.46,.33,-.08,-.58,.32,.2,-.39,.1,.19,-.08,.08,.2,-.09,-.08,.07,.07,-.03,.13,.47,-.24,.21,-.38,.16,.44,.51,-.14,-.12,.49,.1,.38,-.23,-.23,-.1,-.36,.16,-.09,.33,.03,.38,.24,-.08,.15,-.08,.15,-.32,.39,-.25,.15,-.69,-.11,-.19,-.01,-.08,-.01,-.47,.38,-.05,.44,-.2,-.43,-.03,.04,-.23,-.17,.83,.23,.77,-.16,-.01,-.09,.08,.01,.18,-.25,-.57,-.26,-.24,-.02,.58,.25,.09,-.12,.56,.17,.36,.08,.1,-.11,-.06,.31,.25,-.24,.04,-.22,-.38,-.03,-.25,.2,-.12,.33,.5,.08,-.19,-.61,-.16,-.2,-.1,.47,.09,.05,.33,-.02,.03,-.45,-.58,.06,-.45,.36,.35,.59,.27,-.21,-.07,.07,-.06,0,.25,0,.11,-.03,-.28,.52,.11,.65,-.28,-.23,.5,-.28,-.19,-.09,.17,-.32,.67,-.03,-.09,-.19,.33,.41,-.18,-.06,.19,.15,.32,.12,-.41,.64,.38,-.18,.36,-.24,.12,-.23,-.16,-.04,.03,.03,.17,-.57,-.19,-.37,.09,.16,.06,-.12,.06,-.16,.11,-.05,.07,.4,.32,-.03,-.03,.29,.02,.36,.05,.17,-.24,-.04,.4,-.2,.38,-.22,-.11,.33,-.04,-.33,.03,.02,-.34,.18,.33,.02,.13,.16,.11,.27,.37,-.33,.45,.02,.06,-.33,-.19,-.1,-.03,.25,-.19,-.19,.19,.53,.52,.37,-.01,-.1,.1,-.23,.19,-.18,.05,-.12,-.62,.22,.81,-.47,-.17,.25,-.42,.37,.17,.44,.05,.2,-.17,-.49,.18,.15,.58,.11,.11,.43,.59,-.4,-.23,-.25,-.37,-.12,-.32,.45,-.1,.38,-.04,.63,-.08,.07,-.23,-.02,.09,.06,-.37,.07,.12,-.3,.23,-.03,.16,.23,.43,.07,-.11,.27,.27,.18,.3,.44,.31,.11,.05,.09,.38,.24,.3,-.1,.43,.09,-.02,.23,.23,.15,-.3,.2,.18,.44,.37,.08,.35,-.02,.39,.43,-.02,.26,-.21,-.32,-.05,.21,-.03,.35,.1,.46,.36,-.51,-.11,.42,-.17,-.33,.05,.37,.02,-.54,-.46,.06,-.66,.22,.19,-.11,.22,-.27,-.39,.12,.59,.14,-.61,.07,-.01,.07,.2,-.05,.02,.17,.18,-.33,-.11,-.42,-.17,-.11,-.39,0,.31,-.15,.33,-.32,-.13,.1,.07,.23,.2,.25,-.58,.28,-.12,.08,.39,-.01,.4,-.04,.04,.15,-.03,-.07,-.19,-.37,-.28,-.19,.48,.05,-.1,-.02,.4,0,.1,.25,0,-.08,.14,-.23,0,.49,.01,.35,.04,-.04,-.08,.11,.09,.27,0,.64,-.04,.14,.1,.37,-.02,.39,.15,-.08,.25,.52,-.06,.29,.06,.33,.06,-.03,.05,.07,0,-.07,.08,-.33,.52,.21,.08,-.48,.33,.28,-.23,-.25,-.12,-.18,.12,.19,-.12,-.29,.12,-.18,-.47,.33,.34,.17,-.13,-.34,.11,-.26,.12,-.09,.01,.8,-.03,.29,.23,-.03,-.15,.32,-.18,.36,-.3,-.29,.29,-.32,-.01,-.28,.15,.54,.15,-.06,-.2,.06,.32,.06,-.33,.14,.35,.05,-.51,-.08,-.13,-.13,.04,-.29,-.15,.43,.27,-.16,-.35,-.62,.1,-.31,-.36,0,.03,.16,-.31,.3,.04,.12,-.64,.23,-.03,-.23,.05,-.15,.24,.09,-.46,-.37,-.38,-.28,.1,-.1,.18,-.18,.29,-.3,.16,-.19,-.45,.06,.22,.4,.28,-.34,-.45,-.1,.44,-.36,.25,.16,-.42,.07,-.23,-.07,.11,.38,.14,.26,-.05,-.09,-.11,-.03,.21,-.24,.25,.04,-.27,-.1,.18,-.33,.11,0,-.22,.17,.02,.09,-.22,-.17,.04,-.18,-.12,.82,-.17,.28,.03,-.01,-.05,.03,.01,-.27,-.07,.61,-.45,.82,0,-.02,.44,.28,.4,-.2,-.32,-.3,-.29,-.33,-.14,-.44,.18,.03,.01,.4,.19,-.2,.21,.1,-.05,-.03,-.06,-.4,-.04,-.09,-.19,.13,.15,-.36,-.11,-.03,-.48,.18,.43,-.1,-.09,.35,-.17,-.06,-.26,-.33,-.64,.57,-.02,-.57,-.71,-.13,-.02,-.28,-.04,.16,.61,-.01,-.05,.13,-.03,-.27,-.33,.02,-.38,-.27,-.33,.04,-.45,-.07,-.05,-.02,-.09,.06,-.26,-.09,.14,-.09,-.09,-.06,.4,.3,-.32,-.06,-.17,.41,.09,-.03,-.2,.14,.16,.16,.13,-.27,.02,-.42,-.24,-.29,-.37,-.06,.03,-.28,-.11,-.39,-.11,-.17,.06,.25,.03,.3,.28,-.09,.33,-.01,.1,.06,.03,.12,-.03,.05,-.29,-.44,.19,-.4,.38,-.3,-.01,-.13,-.16,-.39,-.29,-.13,-.64,.05,.25,.08,.19,-.05,.2,-.16,-.28,-.07,.04,.2,.13,-.07,0,-.19,-.25,.43,-.11,-.38,.41,-.32,.21,.24,.06,.02,-.41,-.15,-.38,-.48,-.49,-.01,-.13,.11,-.05,.05,-.3,.49,0,.54,-.17,-.55,.07,.27,.41,.16,.29,-.3,-.19,.08,.07,.16,.17,.16,-.5,.33,.07,.28,-.13,-.02,-.25,.31,.3,-.17,.08,.09,.28,-.51,.01,.5,-.01,.4,.24,-.19,.37,.49,.04,-.15,-.21,.14,.34,.05,.33,-.12,.2,-.37,.58,-.07,-.01,-.46,.29,.43,.47,-.04,-.21,.23,-.3,-.04,.45,.16,-.06,.02,.04,.01,-.04,.02,-.06,-.08,.43,-.02,.07,-.13,.12,-.07,-.3,.04,-.15,-.23,.05,.19,.35,-.17,-.35,-.18,.36,.26,.18,.25,-.04,.08,-.18,-.2,.01,.02,-.43,.07,-.16,-.12,.62,-.05,.07,.46,-.12,.16,-.17,-.06,-.45,.48,-.07,.2,.04,-.37,.09,.16,.13,.36,.49,-.53,-.3,-.23,-.08,-.47,-.56,-.31,.05,-.19,.08,.03,.04,-.21,.53,-.1,-.09,.08,-.09,-.43,-.09,.22,-.29,.13,-.17,-.36,-.42,.25,.09,.4,-.06,.1,-.36,-.08,0,-.3,-.33,-.4,0,-.1,.16,-.18,-.18,.03,.11,-.12,-.32,-.45,.17,-.46,.23,.44,-.54,-.01,-.21,.26,-.24,.28,.06,-.18,.14,-.22,-.02,-.36,-.16,-.03,.2,-.04,-.37,.39,-.18,-.3,-.13,.03,-.47,-.26,-.65,-.04,-.48,-.46,.37,-.19,-.46,-.27,-.19,-.37,-.3,.38,.05,-.53,.15,.17,-.32,.19,-.43,.31,-.1,.1,.05,-.36,-.17,.01,.01,-.01,.26,-.24,.19,-.14,-.1,.04,.72,-.21,.11,-.08,-.02,-.07,-.09,-.1,.25,-.26,.21,.01,.12];export{a as rvalData};
