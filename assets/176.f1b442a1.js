const a=[.07,-.01,-.1,.03,-.13,.01,-.2,-.32,-.12,-.18,.21,.06,-.06,.12,.21,-.01,.03,.08,.05,-.01,.1,.71,-.09,.34,.12,-.12,.66,-.11,.05,.7,-.24,.64,-.04,-.23,.47,-.02,.11,.27,-.34,-.23,.01,-.19,-.11,.09,-.17,.32,.11,.38,.81,-.68,-.18,.18,.15,-.06,-.53,-.02,.09,-.32,-.11,-.11,-.6,-.23,-.35,0,.39,.81,-.17,.36,.16,.05,-.04,0,-.6,.3,-.12,.06,.3,-.61,-.03,.71,.15,-.09,-.01,-.15,.09,.74,-.07,.07,.2,.01,-.58,-.07,-.37,-.11,.14,-.17,.15,.3,.15,-.63,-.11,-.27,-.5,-.07,-.59,-.03,.08,.09,.05,-.44,-.1,-.62,-.31,.07,.4,.08,.15,.82,.42,-.02,-.09,.39,-.04,.01,-.04,-.56,-.08,.26,.64,.08,-.35,.07,-.07,-.69,.27,.17,-.6,-.35,.83,.09,-.28,-.04,-.37,-.07,.02,0,-.01,.08,-.27,.14,-.27,-.37,.01,-.01,-.36,-.39,.2,.16,.11,.21,-.42,-.38,.06,-.47,-.35,-.68,-.15,.82,-.21,-.16,.05,.7,-.31,-.35,-.13,1,-.04,.68,-.67,-.03,.12,-.01,-.04,-.02,-.54,-.14,.17,.08,-.41,.08,.01,-.4,.11,-.49,-.45,.1,-.41,-.12,.13,.6,-.09,-.32,.03,.15,.07,-.38,-.1,-.58,-.6,-.17,-.36,.29,.19,.15,-.29,-.38,-.16,-.28,.95,.43,-.14,-.55,-.34,-.04,-.16,.04,-.43,.86,-.3,-.37,-.22,.01,.13,-.14,-.01,.02,.27,.19,-.28,.08,-.67,.31,-.34,-.55,-.23,-.2,.03,-.27,.2,-.02,-.46,.34,-.58,.02,-.18,.06,-.03,-.32,-.36,-.03,0,-.47,-.33,-.24,-.06,-.59,.3,-.13,-.03,-.21,.47,-.09,.03,-.22,-.02,-.11,.76,-.65,-.32,.8,-.69,.48,.02,.04,-.36,-.08,.48,.14,-.47,.72,-.1,-.69,-.08,-.17,-.27,-.11,.13,.23,-.21,-.39,-.01,.03,.56,-.16,-.19,.01,.4,-.59,-.39,.12,-.25,-.08,.08,.08,.2,-.41,-.49,-.55,-.25,-.48,-.25,.08,.3,-.18,-.5,-.44,0,.04,.14,-.42,.28,-.12,0,-.02,.53,.05,.77,-.21,.16,.55,-.55,-.09,-.12,.13,.09,-.18,-.16,-.57,-.15,-.45,-.39,-.56,.04,-.39,.02,.05,-.29,.28,-.38,-.05,-.1,-.12,-.33,.15,.02,.04,.01,.01,-.48,-.04,.79,-.15,-.19,-.15,-.45,-.32,-.02,-.16,.05,-.52,.18,.06,.12,-.09,.14,-.04,.25,.1,-.08,-.09,-.29,-.13,-.16,-.11,-.06,0,.57,-.05,-.02,-.05,.15,-.17,-.25,-.24,-.51,.12,.25,-.28,-.3,-.05,-.24,.23,-.1,-.31,-.17,.08,-.25,.22,-.69,.21,.03,.07,.7,-.15,-.02,.04,.03,.01,-.44,-.37,-.33,-.1,-.03,.06,-.61,-.18,.02,-.06,-.07,-.34,-.37,-.24,-.35,.06,-.7,-.32,.02,-.1,-.19,.48,-.22,-.53,.16,-.12,-.04,.01,.81,.01,-.19,-.25,-.23,-.17,.11,-.68,.13,.21,-.04,.06,.3,-.05,.09,.06,.02,.17,-.61,.02,-.17,-.36,.09,.62,-.39,.14,0,-.31,-.74,-.16,-.24,-.08,.28,-.2,.03,.08,.06,-.21,-.16,.06,-.5,.04,-.08,-.44,-.38,-.08,-.34,-.12,-.3,-.07,-.03,.01,.09,-.59,-.33,-.19,-.3,-.12,-.71,.73,-.31,-.44,-.69,-.07,.28,-.06,.07,-.05,-.29,.1,0,-.06,-.2,-.12,-.49,-.52,-.2,-.46,.02,-.17,-.44,.19,.01,.11,.05,-.57,.03,.67,.62,.02,-.01,.69,-.44,-.06,.43,.04,-.17,-.11,-.44,.01,.33,-.32,.18,.01,-.18,.69,-.25,-.24,-.14,-.17,-.16,.13,-.38,.11,-.26,-.15,-.09,-.17,-.07,-.06,.04,.57,-.69,.07,.66,.03,-.37,-.18,-.59,.28,.01,-.43,.71,.13,-.14,.02,-.01,-.41,-.26,.06,-.08,-.16,-.23,-.14,0,-.17,-.1,-.41,.02,.7,-.52,.4,.07,-.06,.03,.19,-.19,-.39,-.2,-.02,0,-.19,.22,.06,-.26,-.08,-.29,-.02,-.34,.23,-.33,-.32,-.29,-.16,-.09,.25,.17,-.71,.12,-.51,.04,-.65,-.22,.62,-.3,-.14,.63,-.02,.04,-.23,-.09,-.23,.16,-.59,.15,.22,-.33,-.02,.02,-.09,.2,.18,0,-.01,.02,-.13,.01,-.49,.05,.02,.02,-.24,-.22,-.13,-.31,.21,-.04,.68,-.43,-.51,-.47,-.14,.16,.02,-.05,.04,-.14,-.12,-.25,-.09,.1,-.22,-.09,-.1,0,.19,-.14,-.08,-.14,.02,-.03,-.12,-.41,.3,-.17,-.22,-.38,-.07,0,.07,0,.19,-.01,.66,-.14,-.47,-.28,-.16,-.15,.01,-.09,.02,.07,.04,-.22,-.19,.12,.02,-.01,.24,.15,.69,.22,-.16,.29,-.32,-.07,.23,-.46,-.6,.15,0,.04,-.18,.29,.06,.66,.71,-.13,.1,-.21,.18,-.26,-.53,.16,.68,.16,-.12,-.03,-.05,.41,.57,.07,-.04,-.02,.83,.09,-.18,.53,.02,-.19,-.07,.4,-.04,-.21,-.37,-.09,.01,-.6,.16,-.33,-.28,-.03,-.64,-.09,.42,.09,-.19,-.13,-.34,-.53,-.58,.33,.54,.76,-.25,-.35,.3,-.06,.76,-.03,-.36,.06,-.53,-.05,-.15,.27,-.27,.11,-.11,-.18,.37,-.5,.04,.07,.05,-.1,.64,-.27,-.45,.04,.76,.09,.02,.11,-.08,-.26,-.06,-.15,.03,.21,-.22,.17,-.02,.04,.03,-.38,0,-.08,.29,.02,-.27,-.08,.79,-.29,-.05,-.08,-.53,.45,-.25,.09,.71,-.52,.17,.13,.85,-.32,.09,.2,-.18,-.45,-.55,-.35,.61,-.45,-.11,.36,.1,-.07,-.36,.31,.08,-.35,-.35,-.05,.14,-.15,-.59,-.34,-.58,.08,-.23,.1,-.02,.69,-.07,.12,-.3,.11,-.24,-.42,.16,-.17,-.19,-.26,-.06,.17,-.52,-.07,.01,.16,-.04,-.21,-.04,-.03,.11,.09,.02,.1,-.04,.02,-.59,.15,-.68,-.09,.71,.8,-.28,-.53,.06,-.03,-.47,-.4,.04,-.31,.19,-.04,0,-.17,-.16,-.05,-.07,-.04,-.53,-.4,-.11,.13,-.18,-.27,.09,-.62,.05,-.28,-.13,.3,.25,-.26,-.22,.06,-.14,-.29,.08,.14,.03,-.32,-.01,-.13,.42,-.37,-.11,-.17,-.09,-.22,.06,.07,0,-.18,.04,-.28,.04,-.17,0,.31,.03,.39,.05,.35,.16,-.1,-.14,.03,-.29,-.67,-.03,-.15,-.35,.81,-.26,-.22,-.33,-.48,.12,.11,-.44,-.58,-.3,-.55,-.25,-.16,-.59,.08,.04,-.06,0,-.04,-.07,.02,-.13,.09,.32,.17,-.02,.11,.13,.27,-.48,-.39,.53,-.16,-.22,-.22,-.21,-.07,.15,-.29,-.1,-.19,-.55,.01,-.29,-.28,.06,.08,.14,-.52,.03,.13,-.34,-.12,-.5,.14,-.38,.1,.02,-.19,-.01,.38,-.11,-.05,-.59,.1,-.01,.27,-.16,-.7,-.18,-.19,-.3,.06,.1,.13,-.1,-.37,.06,.52,.18,-.14,.25,-.84,-.32,.83,-.23,-.12,-.08,-.46,-.48,-.3,.01,.31,-.01,.02,-.34,-.16,-.15,.04,.73,-.02,-.04,-.64,.6,-.2,.02,.72,-.15,.14,-.06,-.26,.68,-.18,-.41,-.25,-.17,-.08,-.01,-.09,.36,-.56,-.23,.02,-.16,.02,.05,-.07,.26,.08,-.55,-.67,-.05,.73,.37,-.05,.2,-.37,.01,.19,.24,.3,.02,.21,.04,.05,.29,-.54,0,-.44,-.1,-.09,.02,.05,-.13,-.08,-.28,.03,-.01,.04,.55,-.05,-.16,-.23,.02,.17,.11,-.22,.07,-.05,.28,-.55,-.07,.04,-.55,.07,-.37,-.11,.03,.04,-.25,.2,-.68,.02,.01,-.09,-.18,-.3,-.51,-.59,.18,.18,-.38,-.55,0,.17,0,-.27,-.09,-.48,.11,.29,-.44,0,-.02,-.04,.16,.19,-.12,-.01,-.07,.12,.31,-.08,.15,0,-.27,-.28,.19,.63,-.3,-.05,-.19,-.29,-.38,-.14,-.09,-.27,-.42,-.09,.09,-.06,-.41,.03,-.37,.11,-.18,-.26,-.35,.06,-.27,-.03,.03,-.02,-.5,-.07,.64,-.33,-.48,.74,-.38,-.31,.12,-.11,-.09,-.13,.03,.04,.02,.15,-.07,-.1,.09,.02,.03,.19,.11,-.13,.03,-.17,-.02,.06,-.51,.13,-.09,-.39,.27,-.3,-.28,.27,.04,-.22,-.23,.37,-.37,.65,.84,-.42,.12,-.01,.05,-.23,.29,-.19,-.24,.08,.16,-.33,-.02,-.39,.03,-.03,-.49,.1,.06,-.01,.08,-.01,.01,-.26,-.15,-.31,-.43,-.26,-.49,.39,-.28,-.22,-.58,.07,-.26,-.2,-.08,.09,.3,-.64,-.33,0,.28,-.43,-.03,.05,-.39,-.04,-.11,-.48,-.13,.1,-.04,-.32,-.13,.04,-.02,-.44,-.27,-.04,-.3,-.37,.57,.14,-.18,-.37,-.3,-.06,.03,-.2,.1,.02,-.4,-.18,-.12,.02,.41,.03,-.12,.19,-.57,.21,.04,-.64,-.33,-.3,-.26,-.18,-.29,-.52,-.58,-.27,-.48,-.11,-.22,-.06,.14,-.21,-.08,-.38,-.57,.09,.17,.33,.09,-.22,0,-.55,.28,.2,-.04,-.2,.1,.2,.08,.04,.15,-.2,-.11,-.14,.02,-.57,-.27,-.2,-.18,-.4,-.64,.09,.51,-.52,-.03,-.03,.08,-.58,.04,.2,-.19,-.15,.3,.01,-.66,.35,0,-.31,-.24,-.13,-.12,-.22,.15,-.29,.36,-.12,.17,.38,-.01,.37,-.4,.14,0,.01,-.04,.31,.13,.15,-.19,-.29,-.61,-.31,-.08,-.01,.12,-.55,.03,-.63,.31,-.29,-.21,.04,-.33,-.03,.17,-.08,.15,.14,-.17,.11,-.04,-.22,-.23,-.09,-.35,.48,-.14,.11,-.52,.14,.73,-.47,-.26,-.27,.01,-.04,-.08,-.73,.15,.04,.68,-.43,.06,-.45,-.17,-.53,-.1,-.21,-.12,-.07,-.19,-.32,-.05,-.56,.23,-.04,-.65,-.22,-.19,-.41,-.49,-.15,-.44,.03,-.03,-.07,-.01,.06,-.1,-.2,-.54,.11,-.41,-.1,-.25,-.48,.15,-.1,.01,.23,-.66,-.11,-.01,-.33,-.17,-.41,.17,-.68,-.64,-.39,-.37,.06,.05,-.27,.07,0,.8,-.23,-.22,-.49,.02,-.43,.02,-.62,-.04,-.46,-.01,-.17,-.85,-.3,-.41,-.29,.02,-.42,-.62,-.19,.12,-.22,.15,-.34,-.5,.07,-.59,-.2,-.01,-.21,-.36,-.06,.29,-.35,-.45,-.27,-.57,-.2,-.72,.34,.09,-.22,-.27,-.03,-.18,.02,-.1,-.71,.75,-.6,.29,-.42,-.14,-.31,-.19,-.51,-.48,-.51,-.03,-.22,0,-.32,.54,.59,-.56,-.3,-.5,.19,-.68,-.17,.1,.55,-.09,.03,-.38,0,-.18,-.09,.47,.06,-.32,-.48,-.18,-.17,-.28,-.27,-.05,-.63,-.34,-.44,-.35,.06,-.24,-.07,-.5,-.16,-.54,.16,-.07,-.14,-.21,-.02,.07,-.18,-.21,-.63,.12,-.64,-.41,-.17,-.3,-.21,-.19,-.23,-.14,-.28,-.68,-.1,-.1,.03,-.22,-.66,-.26,-.05,-.44,-.21,.2,-.59,-.41,-.29,-.62,-.19,.04,.03,-.32,-.18,-.55,-.07,-.48,-.56,-.58,-.03,-.56,.02,-.27,-.34,-.01,-.39,-.01,-.18,-.39,.08,-.2,.2,-.34,.29,-.77,-.2,.14,-.35,-.26,.06,-.66,-.16,.16,-.15,-.24,-.02,.29,-.42,-.23,.3,.04,-.02,-.14,.05,.29,-.12,-.06,-.15,.12,.24,-.01,-.76,-.71,-.56,0,-.1,.11,.11,-.03,-.58,.58,-.28,.61,-.18,-.12,-.18,.11,.32,0,.12,-.13,-.29,-.06,-.37,-.19,-.3,-.49,-.68,-.12,.05,-.21,-.04,.01,-.31,.26,-.1,-.21,0,-.11,0,-.49,.01,-.24,.62,.04,-.17,.13,.12,-.09,-.26,.25,.15,-.26,.01,0,.02,.2,-.43,-.47,-.14,.06,.01,-.07,-.19,-.07,.65,.53,-.05,-.12,-.01,-.15,-.03,.2,-.14,0,-.3,-.6,-.34,-.23,-.16,.06,-.19,-.65,-.53,-.38,.29,-.53,-.14,-.32,-.52,.94,.08,-.17,-.16,.08,-.55,.01,-.25,.15,-.44,-.2,-.02,.07,-.23,-.01,-.36,-.08,.23,-.19,-.49,-.14,-.31,-.04,.05,-.39,-.3,-.58,0,-.45,-.13,-.2,-.11,-.01,-.19,.01,-.01,.2,-.39,-.16,.01,-.06,-.16,.06,.33,-.56,.15,.15,.16,.19,.01,-.05,-.55,-.04,-.61,.03,-.39,.1,-.25,.36,.03,-.17,-.04,-.66,-.44,-.47,.02,.03,-.2,.13,-.13,.28,.04,-.26,-.53,-.62,.08,.13,.07,-.31,-.07,-.21,.03,-.01,-.35,-.24,-.11,-.07,-.01,.51,-.34,-.55,-.51,-.03,-.09,.19,-.13,.01,-.19,-.04,-.18,-.09,-.49,.17,-.19,-.22,.81,-.45,-.37,-.6,-.15,-.05,.34,-.12,.29,-.08,.22,-.08,-.11,.07,-.2,-.53,-.12,-.47,-.05,.1,.01,-.26,.31,.28,-.51,.12,-.1,-.12,.08,-.05,.05,.23,-.61,.02,.08,-.07,-.13,.72,-.1,-.02,.01,-.11,-.04,-.3,-.38,-.49,-.17,-.4,.58,-.12,.02,-.12,-.23,-.11,-.25,.01,.3,.01,.1,.12,-.32,-.08,0,.33,.21,.13,-.01,-.15,-.04,-.38,-.09,-.65,.16,-.5,.03,.62,0,.16,.32,-.37,.12,-.33,-.07,.29,-.36,.09,.25,-.23,-.54,-.06,-.39,-.16,-.21,.19,-.15,-.18,-.06,.15,-.38,-.05,-.25,-.3,-.24,-.23,-.05,-.08,-.12,.04,-.16,.11,.65,.03,.41,-.6,.12,-.01,-.13,-.08,-.03,-.21,-.19,-.36,.24,-.07,.06,.06,.01,.02,.02,-.13,-.37,-.13,-.2,-.25,.47,.1,.83,-.6,-.13,-.36,-.05,-.12,-.22,.07,.79,.01,.46,.4,.08,-.27,.15,-.06,.02,-.02,.04,-.46];export{a as rvalData};
