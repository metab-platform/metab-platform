const a=[.09,-.02,-.14,-.03,-.14,.02,-.25,-.41,-.31,-.13,.08,.23,-.15,.17,.08,.05,.07,.1,.11,-.03,.13,.72,-.11,.23,-.04,-.24,.76,.03,-.05,.78,-.35,.69,-.09,-.14,.41,.01,.07,.14,-.29,-.19,-.07,-.23,-.04,.1,-.23,.19,.14,.4,.68,-.67,-.23,.25,.27,-.2,-.51,-.11,-.03,-.24,0,-.27,-.49,-.16,-.41,-.01,.23,.85,-.2,.25,.09,.01,-.02,.06,-.68,.23,-.2,.06,.25,-.52,-.06,.66,.08,-.27,-.05,-.26,.22,.63,-.22,0,.22,-.1,-.36,-.03,-.51,.05,.22,-.2,.18,.3,.23,-.63,-.05,-.33,-.45,-.04,-.6,-.1,-.06,-.08,-.09,-.47,-.13,-.49,-.27,.12,.5,.04,.09,.92,.38,-.2,-.12,.28,.05,-.07,-.05,-.56,-.11,.14,.76,.04,-.36,.15,-.05,-.61,.32,.14,-.46,-.48,.96,.06,-.26,-.04,-.42,-.19,.05,0,-.02,.08,-.35,.13,-.35,-.49,.01,.05,-.39,-.16,.21,.28,.13,.09,-.31,-.39,-.05,-.51,-.5,-.65,-.1,.94,-.16,-.39,.09,.71,-.32,-.35,-.33,.86,-.03,.73,-.73,-.1,0,-.03,-.01,0,-.61,-.23,.16,.22,-.27,.2,.01,-.45,.05,-.63,-.5,.1,-.49,-.07,.12,.66,-.17,-.38,-.01,.14,.07,-.35,-.12,-.63,-.6,-.19,-.4,.19,.33,.09,-.2,-.43,-.09,-.36,.92,.4,-.32,-.53,-.25,-.14,-.3,-.01,-.45,1,-.19,-.34,-.17,-.02,.1,-.14,-.02,.07,.17,.16,-.12,0,-.53,.18,-.36,-.47,-.36,-.19,.08,-.31,.16,.05,-.32,.28,-.55,.02,-.19,-.03,-.05,-.49,-.23,.01,0,-.24,-.48,-.24,-.12,-.6,.24,-.19,-.16,-.25,.57,.02,.01,-.18,-.18,-.1,.82,-.6,-.32,.65,-.61,.47,-.19,.01,-.42,-.22,.48,.06,-.41,.75,-.24,-.66,-.16,-.13,-.36,-.07,.02,.32,-.21,-.49,-.01,.06,.71,-.18,-.05,-.06,.39,-.52,-.3,.06,-.33,-.04,-.02,.07,.23,-.49,-.49,-.31,-.19,-.37,-.34,.26,.24,-.28,-.42,-.46,-.08,.02,.12,-.47,.22,-.23,-.08,-.1,.63,.04,.77,-.27,.14,.61,-.61,-.03,-.06,.22,.05,-.15,-.09,-.61,-.04,-.45,-.48,-.45,.08,-.44,.11,-.17,-.27,.24,-.35,-.03,-.22,-.2,-.4,-.04,.06,-.06,.06,-.04,-.35,-.1,.69,-.08,-.41,-.16,-.38,-.27,.13,-.28,.04,-.41,.21,.08,.03,-.09,.14,-.13,.29,.15,-.11,-.09,-.25,-.19,-.13,-.23,-.19,.03,.7,-.09,-.07,-.02,.28,-.22,-.23,-.46,-.44,.08,.2,-.23,-.42,-.17,-.22,.2,-.02,-.28,-.02,.09,-.26,.14,-.61,.13,.05,-.02,.8,-.17,-.23,0,0,-.02,-.51,-.18,-.38,-.12,-.21,.06,-.61,-.25,.03,-.13,-.07,-.34,-.36,-.34,-.4,-.01,-.54,-.21,.02,-.2,-.29,.51,-.2,-.57,.21,-.09,-.05,-.03,.7,-.02,-.17,-.33,-.26,-.22,.07,-.66,.08,.17,-.06,.1,.38,-.17,-.07,.01,.04,.2,-.52,-.11,-.18,-.37,.1,.64,-.49,.06,.01,-.48,-.56,-.19,-.3,-.05,.13,-.17,.04,.24,-.08,-.06,-.14,-.04,-.41,0,-.11,-.35,-.33,-.15,-.34,-.27,-.33,-.03,.05,-.09,.06,-.48,-.34,-.16,-.35,-.24,-.53,.56,-.14,-.45,-.62,-.23,.33,-.04,.06,-.07,-.34,.13,.08,.11,-.17,-.17,-.57,-.44,-.2,-.39,.07,-.17,-.39,.11,-.08,.21,.12,-.36,-.02,.66,.69,.03,-.09,.66,-.35,.02,.46,0,-.16,-.09,-.38,.03,.32,-.25,.09,-.05,-.17,.62,-.3,-.32,-.18,-.2,-.08,.12,-.19,.14,-.23,-.14,-.23,.05,-.11,-.07,-.02,.61,-.65,-.04,.73,.15,-.48,-.21,-.62,.2,.01,-.47,.76,.07,-.18,.06,.02,-.33,-.38,.14,-.28,-.17,-.16,-.16,-.03,-.24,-.08,-.3,.05,.8,-.34,.46,.12,.01,-.1,.1,-.24,-.41,-.22,.01,.02,-.17,.15,.16,-.29,.03,-.2,.01,-.33,.37,-.27,-.18,-.32,-.24,-.17,.16,.2,-.64,.07,-.45,-.08,-.53,-.23,.63,-.24,-.3,.77,.14,.02,-.23,-.16,-.38,.06,-.61,.14,.29,-.34,-.02,-.1,-.06,.16,.13,-.02,0,.05,-.09,0,-.25,.17,.13,.07,-.31,-.36,-.22,-.5,.23,-.03,.75,-.35,-.26,-.54,-.22,.11,.01,-.11,-.01,-.14,-.25,-.24,-.04,.11,-.3,-.2,-.19,.02,.15,-.03,-.18,-.11,-.13,.08,-.11,-.35,.3,-.29,-.39,-.52,-.06,.1,.11,.11,.05,.02,.7,-.24,-.33,-.19,-.12,-.11,.03,-.24,.12,.06,.02,-.33,-.19,.08,-.06,-.13,.11,.17,.61,.26,-.19,.31,-.22,-.08,.21,-.53,-.47,.11,-.05,.17,-.2,.12,.01,.68,.68,-.11,.08,-.45,.1,-.2,-.56,.22,.6,.3,-.25,-.13,-.13,.38,.65,-.01,.12,0,.95,-.06,-.14,.61,-.02,-.22,-.08,.3,-.03,-.22,-.41,-.1,.06,-.5,.2,-.4,-.39,.02,-.44,-.17,.5,.19,-.19,-.11,-.34,-.62,-.53,.2,.6,.69,-.23,-.4,.2,-.18,.85,-.03,-.41,.09,-.59,-.24,-.14,.25,-.28,.06,-.3,-.16,.46,-.27,0,.08,.06,-.1,.5,-.27,-.47,.02,.71,.05,-.01,.22,-.2,-.33,-.13,-.18,-.02,.22,-.18,.14,-.01,0,-.01,-.42,.08,.02,.29,.07,-.33,-.04,.75,-.26,-.19,-.26,-.56,.42,-.26,-.07,.83,-.63,.13,.13,.88,-.52,.12,.23,-.11,-.22,-.32,-.51,.52,-.58,-.15,.31,.1,-.05,-.28,.36,.13,-.41,-.33,-.03,.16,-.14,-.49,-.37,-.36,.1,-.29,.18,.02,.77,-.14,.08,-.32,.07,-.28,-.49,0,-.16,-.21,-.33,-.08,.16,-.44,-.01,-.05,.24,-.07,-.17,-.14,-.13,.16,.07,.03,.16,-.11,0,-.48,.18,-.61,-.08,.69,.72,-.19,-.46,.04,.05,-.34,-.42,.01,-.32,.18,0,-.04,-.16,-.17,-.03,-.08,-.07,-.28,-.43,-.09,.06,-.21,-.3,.09,-.63,.03,-.28,-.14,.4,.22,-.22,-.28,.02,0,-.39,.08,.07,0,-.36,.02,-.22,.41,-.33,-.06,-.21,-.14,-.26,-.04,-.08,.05,-.14,-.05,-.33,.05,-.17,-.04,.28,-.03,.35,.07,.21,.16,-.29,-.19,-.09,-.24,-.71,-.14,-.18,-.37,.81,-.39,-.17,-.4,-.27,.19,.21,-.36,-.49,-.27,-.54,-.22,-.17,-.62,.05,.01,-.2,.01,-.08,-.11,.03,-.03,.03,.32,.27,-.01,.06,.27,.24,-.51,-.37,.49,-.21,-.08,-.21,-.13,-.05,.09,-.33,.01,-.24,-.52,.06,-.4,-.3,.05,.13,.16,-.41,0,.15,-.38,-.21,-.53,.09,-.41,.11,-.03,-.08,-.01,.24,-.13,-.02,-.5,.12,.08,.26,-.14,-.57,-.21,-.12,-.31,-.03,.15,.1,-.11,-.38,-.1,.49,.26,-.28,.04,-.67,-.49,.92,-.31,-.11,-.05,-.51,-.49,-.25,0,.3,-.15,-.03,-.26,-.16,-.23,.06,.69,.05,-.02,-.55,.54,-.21,0,.71,-.31,-.06,-.07,-.22,.66,-.15,-.5,-.33,-.26,-.14,-.06,-.16,.29,-.44,-.29,-.04,-.35,.05,.02,-.15,.27,.02,-.57,-.65,-.09,.59,.29,-.05,.02,-.46,-.12,.15,.14,.31,.07,.17,.08,-.08,.16,-.27,-.01,-.42,-.17,-.12,.01,.04,-.12,-.23,-.34,.05,-.14,-.1,.54,-.01,-.22,-.26,.04,-.02,.3,-.29,.08,-.04,.14,-.5,-.24,.05,-.54,.07,-.49,.03,.09,-.18,-.29,.26,-.73,-.14,.04,-.08,-.32,-.43,-.35,-.48,.3,.27,-.39,-.6,-.03,.12,.02,-.44,-.11,-.42,.13,.35,-.39,-.01,.06,-.07,.12,.26,-.1,.02,-.15,.07,.25,-.1,.27,.08,-.37,-.26,.17,.71,-.38,.03,-.22,-.31,-.41,-.12,-.07,-.19,-.45,-.09,.13,-.06,-.23,-.02,-.45,0,-.3,-.26,-.31,.06,-.35,-.21,.04,0,-.24,-.13,.65,-.24,-.2,.76,-.29,-.41,.09,-.13,-.17,-.27,.03,.1,.05,.11,-.12,-.18,.13,.04,.01,.25,.04,-.21,.09,-.35,-.07,.07,-.24,.15,-.18,-.38,.3,-.34,-.41,.27,.01,-.3,-.15,.38,-.29,.77,.95,-.43,.19,-.17,.07,-.36,.09,-.44,-.26,-.02,.26,-.2,-.02,-.49,.08,-.19,-.55,-.05,.16,0,.1,0,.08,-.14,-.22,-.32,-.46,-.19,-.63,.36,-.32,-.2,-.6,-.09,-.41,-.28,-.19,.13,.21,-.59,-.33,-.04,.3,-.46,0,.03,-.39,-.04,.03,-.46,-.25,.06,-.03,-.37,-.13,.03,-.04,-.34,-.32,0,-.32,-.29,.59,.16,-.14,-.24,-.24,.02,.02,-.24,.1,.05,-.38,-.15,-.18,-.11,.3,-.15,-.22,.2,-.57,.18,.12,-.69,-.42,-.24,-.37,-.28,-.37,-.5,-.59,-.21,-.47,-.21,-.25,-.15,.12,-.11,-.09,-.37,-.57,-.11,.06,.22,.03,-.32,-.03,-.55,.3,.25,.06,-.12,.14,.18,.11,.07,.13,-.25,-.06,-.17,.04,-.58,-.28,-.09,-.26,-.38,-.66,.06,.41,-.49,-.06,-.01,.08,-.47,.07,.29,-.17,-.24,.21,-.17,-.64,.39,0,-.26,-.2,-.07,-.2,-.18,.1,-.3,.37,-.04,.01,.24,.03,.27,-.49,.08,.03,-.01,-.02,.35,.01,.17,-.17,-.37,-.39,-.36,-.21,.05,.21,-.49,.04,-.42,.19,-.27,-.25,.05,-.29,.07,.17,-.12,-.03,.11,-.07,.17,-.21,-.27,-.26,-.18,-.41,.46,-.19,.14,-.45,.14,.72,-.45,-.27,-.25,-.04,-.05,-.14,-.68,.2,.08,.67,-.43,.09,-.48,-.26,-.54,-.18,-.33,-.29,-.14,-.3,-.24,-.11,-.57,.11,-.08,-.6,-.14,-.26,-.45,-.39,0,-.32,.07,-.07,-.12,-.13,.06,-.19,-.28,-.64,.1,-.47,-.15,-.31,-.24,0,-.22,-.08,.26,-.57,-.16,-.04,-.36,-.19,-.35,-.03,-.45,-.43,-.42,-.39,.06,.06,-.23,.07,.02,.81,-.15,-.28,-.53,-.2,-.45,.03,-.39,-.1,-.55,.02,-.17,-.73,-.26,-.38,-.23,-.21,-.39,-.59,-.29,.16,-.33,-.03,-.45,-.44,.07,-.37,-.36,-.02,-.26,-.39,-.08,.2,-.29,-.45,-.38,-.55,-.1,-.54,.26,.16,-.21,-.23,-.25,-.33,.04,-.16,-.65,.73,-.61,.2,-.33,-.13,-.26,-.27,-.49,-.54,-.52,.1,-.17,-.05,-.35,.47,.51,-.51,-.33,-.47,.19,-.68,-.18,-.03,.35,-.21,-.06,-.52,-.13,-.17,-.06,.32,.01,-.49,-.56,-.16,-.18,-.33,-.41,-.17,-.6,-.44,-.46,-.41,.08,-.37,-.11,-.47,-.18,-.47,.1,-.01,-.2,-.31,-.06,-.02,-.19,-.19,-.58,.1,-.56,-.39,-.36,-.38,-.37,-.3,-.16,-.21,-.16,-.6,-.07,-.05,-.01,-.33,-.55,-.35,.03,-.37,-.11,.16,-.53,-.43,-.42,-.5,-.13,.02,.05,-.26,-.13,-.29,-.02,-.56,-.56,-.56,.15,-.61,-.13,-.18,-.46,-.06,-.38,-.11,-.17,-.45,.08,-.3,.12,-.39,.15,-.64,-.14,.05,-.39,-.34,0,-.62,-.28,.17,-.09,-.19,-.02,.21,-.32,-.33,.17,.04,-.18,-.32,.01,.21,-.17,-.09,-.27,.12,.16,-.07,-.58,-.5,-.5,0,-.12,.18,.02,-.12,-.52,.59,-.43,.48,-.15,-.17,-.18,.15,.27,.01,.14,-.2,-.27,-.01,-.36,-.1,-.2,-.52,-.63,-.2,.08,-.23,.04,.02,-.28,.3,-.05,-.17,.01,-.06,.04,-.53,.06,-.37,.78,.01,-.16,-.09,.23,-.07,-.36,.18,.14,-.28,-.07,-.06,.02,.27,-.48,-.57,-.15,-.04,-.02,-.1,-.16,-.08,.77,.48,-.07,-.13,-.04,-.17,-.13,.11,-.19,-.11,-.38,-.65,-.31,-.35,-.25,.03,-.24,-.68,-.58,-.35,.13,-.55,-.18,-.34,-.28,.92,-.08,-.18,-.27,-.05,-.54,.03,-.4,.14,-.45,-.22,-.04,0,-.16,-.11,-.39,-.16,.19,-.14,-.37,-.12,-.27,-.09,.04,-.49,-.48,-.39,-.14,-.35,-.13,-.03,0,-.02,-.18,.04,.02,.12,-.31,-.13,.02,-.13,-.17,.05,.28,-.48,-.07,.16,.15,.17,-.1,-.11,-.46,-.16,-.41,.06,-.4,.14,-.21,.42,.09,-.3,-.11,-.58,-.5,-.47,-.09,-.04,-.27,.07,-.31,.23,0,-.34,-.56,-.64,0,-.04,.05,-.15,.03,-.15,-.01,-.01,-.49,-.36,-.18,0,.02,.49,-.41,-.61,-.38,.03,-.12,.04,-.29,.03,-.12,-.06,-.17,-.28,-.26,.01,-.16,-.26,.87,-.44,-.52,-.65,-.3,-.13,.26,-.16,.14,-.1,.18,-.07,-.16,-.06,-.23,-.56,-.14,-.56,-.02,.19,.02,-.34,.39,.14,-.29,.08,.02,-.06,-.01,-.16,.04,.21,-.4,-.05,.05,-.07,-.1,.78,-.08,-.01,-.04,-.24,-.14,-.33,-.42,-.51,-.23,-.33,.51,-.06,.01,-.1,-.29,-.25,-.23,-.09,.28,-.04,.09,-.01,-.47,-.04,-.09,.33,.26,.02,0,-.29,-.02,-.4,-.07,-.5,.17,-.58,.03,.64,-.12,.13,.43,-.48,.03,-.29,-.08,.32,-.4,.04,.13,-.24,-.33,-.16,-.37,-.1,-.37,.28,-.23,-.17,-.07,.17,-.51,0,-.22,-.32,-.35,-.23,-.03,-.21,-.2,0,-.21,.08,.72,-.01,.37,-.47,.09,-.09,-.2,-.17,-.04,-.27,-.1,-.31,.14,.01,.11,-.02,.06,.02,.11,-.14,-.36,-.19,-.26,-.32,.39,.07,.82,-.48,-.16,-.37,-.1,-.13,-.38,-.03,.83,.04,.45,.42,.08,-.47,.12,-.1,-.06,.05,.02,-.49];export{a as rvalData};
