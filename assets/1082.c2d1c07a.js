const a=[.04,-.15,-.22,-.05,-.28,.16,-.14,-.23,-.09,-.35,.07,.23,.04,.24,.07,-.11,-.13,.11,.15,-.04,.18,.79,-.01,.1,.01,-.22,.72,-.1,.08,.67,-.29,.79,-.16,-.28,.46,.05,-.16,-.02,-.29,-.23,.04,-.31,-.13,.02,-.17,.04,.09,.51,.61,-.44,-.17,.09,-.09,-.25,-.32,-.09,.18,-.3,-.11,-.2,-.52,-.21,-.4,-.11,.42,.56,-.28,.09,.12,-.11,-.11,-.2,-.49,.14,-.33,-.03,.14,-.55,-.14,.52,.18,-.17,.04,-.26,.32,.79,-.17,.14,.28,-.13,-.34,.03,-.23,-.01,.18,.18,.13,.07,.4,-.55,-.08,-.34,-.23,-.11,-.36,.03,.01,.09,-.04,-.32,-.11,-.43,-.16,0,.63,-.09,.16,.68,.65,-.12,-.08,.26,-.09,.06,.02,-.33,-.23,.47,.33,-.17,-.11,.26,.06,-.54,.06,.22,-.41,-.22,.6,-.06,-.34,-.16,-.44,-.19,-.07,0,.04,.22,-.24,.09,-.35,-.39,.02,-.08,-.24,-.15,.14,.04,0,.07,-.22,-.27,-.05,-.29,-.22,-.57,-.15,.62,.18,-.23,0,.53,-.25,-.21,-.09,.73,.12,.62,-.55,-.19,.08,0,-.11,-.16,-.38,.06,-.01,-.12,-.36,.17,.01,-.31,.15,-.42,-.45,-.03,-.29,-.07,-.06,.78,-.28,-.33,-.21,-.02,.22,-.2,-.03,-.36,-.38,-.01,-.27,.04,.16,-.11,-.27,-.34,-.07,-.26,.7,.36,-.1,-.25,-.14,-.18,-.11,-.21,-.29,.69,-.11,-.2,-.13,-.01,-.05,-.19,.06,-.06,.06,.06,-.09,-.01,-.63,.05,-.18,-.36,-.23,-.19,.01,-.39,.1,-.06,-.33,.47,-.34,.25,-.27,.16,.07,-.28,-.2,-.18,-.1,-.23,-.26,-.33,.09,-.33,.25,-.22,-.09,-.32,.45,-.15,-.18,-.29,-.17,.01,.58,-.55,-.26,.64,-.5,.4,-.21,.1,-.09,-.09,.47,-.14,-.2,.85,0,-.45,-.12,-.16,-.06,-.13,-.12,.25,-.3,-.2,-.02,-.1,.65,-.19,-.06,0,.67,-.56,-.08,-.02,-.42,-.07,.2,-.03,.33,-.2,-.3,-.29,-.3,-.35,-.34,.29,.04,-.26,-.32,-.14,-.07,.09,.4,-.16,.2,-.16,.15,-.1,.58,0,.52,-.07,.13,.84,-.5,-.08,.11,.13,-.17,-.22,-.1,-.48,-.11,-.34,-.32,-.42,-.02,-.1,-.09,-.2,-.24,.12,-.31,-.2,-.18,-.22,-.1,.2,.18,.07,-.08,-.22,-.5,-.24,.7,-.05,-.2,.22,-.52,-.12,.01,-.2,-.1,-.34,.06,.14,.07,-.21,.09,.09,.07,.12,-.04,-.08,-.28,.04,-.11,-.08,-.04,-.12,.68,.05,.03,.09,.37,.02,-.29,-.14,-.39,.07,.01,-.24,-.3,-.05,-.29,.15,.13,-.29,.03,-.11,-.32,.2,-.51,.29,-.02,-.08,.54,.02,.01,-.13,-.09,.02,-.27,-.13,-.16,.28,-.12,.04,-.46,-.39,-.03,-.08,-.21,-.28,-.3,-.39,-.48,-.05,-.66,-.14,-.12,-.13,-.16,.32,-.21,-.45,.28,.14,.05,.18,.82,-.24,-.09,-.21,-.34,-.14,.13,-.6,.11,.39,-.08,.21,.25,-.22,.05,-.2,-.16,-.15,-.37,.03,-.25,-.32,-.04,.58,-.36,-.11,-.09,-.19,-.76,.09,-.09,.02,.25,-.22,.02,.24,.25,-.03,-.27,-.13,-.29,-.11,-.04,-.2,-.29,-.01,-.27,-.11,-.44,.03,.13,.09,0,-.63,-.37,-.03,-.5,.01,-.71,.63,-.34,-.26,-.56,-.16,.21,-.16,.31,.05,-.3,.01,.05,-.2,-.15,-.17,-.35,-.28,-.08,-.38,-.06,-.22,-.1,.3,.19,.24,.18,-.31,.14,.59,.47,.09,-.1,.61,-.44,-.03,.33,-.19,-.27,-.22,-.4,.08,.34,-.25,-.06,-.07,-.32,.56,-.01,-.11,-.25,-.12,-.04,-.01,-.35,.16,-.23,-.22,-.25,-.09,-.17,-.22,-.01,.7,-.56,.06,.48,-.07,-.37,0,-.36,.03,-.13,-.5,.5,-.14,-.12,.04,.05,-.38,-.14,.12,-.07,-.27,-.23,-.17,.02,-.37,-.18,-.3,-.04,.68,-.32,.64,-.12,0,-.03,-.08,.02,-.31,-.02,-.07,-.11,-.19,-.06,-.09,-.03,.09,.13,-.06,.02,.24,-.43,-.19,-.29,-.14,-.08,.16,.23,-.54,.25,-.32,.04,-.5,-.19,.75,-.31,-.25,.74,-.02,.07,-.27,.08,-.31,.37,-.34,.05,.25,-.21,-.14,.02,.01,.01,-.01,.06,0,-.11,-.11,-.19,-.33,.05,-.05,-.09,.03,-.22,-.33,-.2,.17,-.03,.62,-.21,-.26,-.43,-.31,.18,.01,-.15,.2,-.15,-.17,-.11,-.22,.16,-.31,-.11,.05,-.02,.17,.15,.04,-.19,.16,-.21,-.15,-.38,.23,-.31,-.22,-.28,-.26,.14,-.05,0,.19,.03,.74,-.22,-.25,-.27,.03,.02,-.13,.09,.14,.02,.11,-.19,-.14,-.14,0,-.11,.15,.22,.68,.05,-.17,.28,-.21,-.08,.18,-.38,-.38,-.13,.06,.04,-.07,.25,.03,.87,.61,-.08,.14,-.2,-.08,-.02,-.5,.01,.82,.4,-.16,-.26,.03,.65,.31,.03,.09,-.04,.61,.05,-.05,.33,-.14,-.29,.14,.27,0,-.03,-.16,-.26,-.1,-.35,.12,-.23,-.27,-.15,-.45,-.15,.62,.08,-.32,-.18,-.23,-.35,-.57,.5,.69,.8,.1,-.18,.05,-.16,.52,-.18,-.49,.13,-.32,-.01,-.2,.15,-.32,-.15,-.03,-.2,.37,-.36,-.04,.11,-.02,-.09,.71,-.2,-.33,.06,.57,-.1,-.11,-.03,-.06,-.11,-.06,-.09,-.23,.11,-.15,.08,-.02,.11,-.2,-.3,.23,.03,.44,-.04,-.1,-.17,.74,-.17,-.14,.05,-.33,.44,-.33,.05,.72,-.49,.08,.08,.72,-.26,.2,.13,.1,-.33,-.3,-.21,.7,-.42,-.27,.63,.18,.18,-.27,.32,.07,-.29,-.2,.15,.02,-.15,-.35,-.1,-.38,.06,-.01,.15,-.08,.62,-.17,.09,-.4,-.14,-.31,-.29,.26,-.23,-.2,-.36,.16,.21,-.33,-.18,-.1,.13,-.05,-.23,-.25,.25,.16,.12,-.08,.03,0,-.1,-.34,.03,-.35,-.18,.64,.58,-.15,-.48,.17,.03,-.23,-.22,-.01,-.07,.25,.03,-.11,-.23,-.26,-.15,-.22,-.09,-.34,-.32,-.28,.01,-.25,-.33,.16,-.54,.14,-.3,-.25,.04,.53,-.06,-.35,0,-.08,-.25,-.06,.09,-.17,-.18,.17,.15,.69,-.23,-.2,-.28,.09,-.3,.33,-.01,.19,-.24,.1,-.25,-.17,-.15,.15,.38,-.05,.26,.22,.12,.23,-.14,-.15,.12,.03,-.5,-.03,-.29,-.2,.66,-.27,-.02,-.15,-.27,-.03,.01,-.28,-.47,-.19,-.38,-.21,-.2,-.28,-.04,-.03,-.18,.1,-.17,-.01,-.07,-.13,-.1,.11,-.02,-.15,-.02,.07,.14,-.37,.04,.45,.21,-.1,-.27,-.04,.15,.03,-.37,.04,-.32,-.31,-.14,-.02,-.29,-.01,-.05,.01,-.29,.03,.2,-.06,-.03,-.44,-.09,-.13,-.09,-.1,.04,-.15,.4,-.14,-.08,-.35,.03,.06,.23,-.17,-.36,-.2,-.06,-.03,.09,.22,.17,-.1,-.1,-.02,.49,.06,-.14,.01,-.73,-.1,.6,-.21,-.22,-.06,-.37,-.51,-.24,-.15,.54,-.12,-.22,-.1,-.28,-.33,-.06,1,-.14,-.07,-.51,.34,-.21,.07,.81,-.21,.03,-.07,-.31,.89,-.23,-.36,-.1,.12,-.12,-.03,.07,.37,-.42,-.19,-.04,-.12,-.18,.14,-.06,.44,.14,-.48,-.57,-.07,.62,.41,.09,-.03,-.29,-.14,.29,0,.1,-.16,.33,-.1,-.07,.09,-.36,.13,-.26,-.16,-.26,.04,.11,-.25,-.08,-.04,-.08,.23,-.12,.47,0,-.11,-.32,-.08,-.03,.05,-.18,-.15,-.05,.42,-.54,-.1,.11,-.25,-.04,-.23,-.12,-.04,-.07,-.18,.13,-.55,.02,.08,-.21,-.24,-.32,-.46,-.36,.03,.26,-.08,-.37,-.11,-.1,-.11,-.29,-.08,-.27,.17,.25,-.42,.01,-.1,-.23,-.1,.08,-.2,.05,.1,.3,.54,-.15,.11,.15,-.31,-.29,.2,.46,-.16,-.1,-.28,.03,-.36,.22,-.21,-.27,-.29,-.17,-.12,.01,-.29,-.05,-.1,.06,-.28,-.38,-.22,.08,-.43,-.04,-.08,-.07,-.34,.07,.52,-.1,-.31,.43,-.19,-.33,.16,-.26,-.21,-.13,.02,-.12,-.07,-.11,-.24,-.17,-.07,-.08,.04,-.06,.08,-.2,-.08,-.22,-.05,.01,-.34,.12,-.09,-.2,.28,-.18,-.23,.28,-.04,-.17,.01,.3,-.22,.68,.65,-.43,-.03,-.19,-.1,-.24,.18,-.13,-.18,.13,.16,-.16,-.02,-.36,.13,.01,-.29,.14,-.03,-.12,-.05,-.02,-.12,-.17,-.26,-.41,-.43,-.13,-.21,.67,-.25,-.18,-.53,-.01,-.19,-.29,-.06,.1,.06,-.59,-.03,-.23,.27,-.36,-.13,.21,-.15,.25,-.07,-.45,-.07,-.14,-.13,-.27,.23,.07,-.31,-.16,.01,-.17,-.41,-.24,.46,-.06,-.23,-.09,-.17,-.02,-.01,-.05,0,.04,-.39,-.19,.01,.1,.19,.2,-.05,-.04,-.36,.02,.12,-.44,-.15,-.16,-.16,-.04,-.16,-.43,-.42,.05,-.23,-.03,-.22,.1,.35,-.06,.09,-.37,-.29,.17,.27,.42,.32,-.02,-.13,-.24,.46,.36,.13,-.17,.27,.17,.26,.24,.16,-.06,-.11,-.02,-.03,-.45,-.24,-.16,.04,-.23,-.43,-.17,.47,-.34,-.17,-.18,.06,-.38,.06,-.07,-.28,-.01,.02,.08,-.57,.21,-.01,-.28,-.3,-.06,.2,-.2,-.13,-.17,.22,-.14,.05,.38,-.09,.2,-.4,-.11,-.13,-.13,-.1,.17,-.03,.07,-.16,-.32,-.46,-.39,-.2,.01,.12,-.5,.13,-.45,.08,-.12,-.31,-.04,-.05,-.07,.24,-.07,.21,-.01,-.11,.12,-.14,-.38,-.2,.01,-.36,.56,.01,.11,-.21,.14,.61,-.27,-.24,-.25,-.13,.02,.12,-.38,.14,.2,.73,-.36,.05,-.31,.06,-.36,-.08,.11,-.04,-.05,-.13,-.1,.05,-.29,.32,-.09,-.36,.04,-.2,-.08,-.28,.02,-.4,-.13,.05,-.02,-.08,.14,-.12,-.42,-.45,.15,-.18,-.25,-.07,-.23,.07,-.23,-.09,.02,-.41,-.05,-.02,-.39,-.13,-.32,.1,-.43,-.44,-.26,-.32,.05,.06,-.28,.02,-.07,.71,.02,-.14,-.26,.1,-.36,-.1,-.42,.01,-.49,-.12,-.16,-.48,-.33,-.38,-.28,.06,-.02,-.5,-.34,-.02,-.25,.23,-.3,-.5,-.04,-.4,-.18,-.16,-.19,-.43,-.19,.13,-.35,-.43,-.15,-.44,-.14,-.66,.13,.14,-.21,-.31,-.04,-.18,-.1,-.18,-.39,.52,-.43,.04,-.32,-.02,-.25,-.22,-.46,-.46,-.3,-.28,-.24,-.16,-.45,.68,.35,-.37,-.22,-.37,.05,-.55,-.25,-.04,.27,-.18,.04,-.12,-.17,-.3,-.09,.38,-.08,-.22,-.42,-.24,-.04,-.23,-.34,.01,-.51,-.31,-.2,-.29,-.17,-.29,-.1,-.33,-.13,-.29,.03,-.08,-.15,-.13,-.15,.21,-.06,-.33,-.37,.04,-.57,-.37,-.12,-.26,-.16,-.3,.04,-.21,-.17,-.46,.09,-.2,-.02,-.22,-.57,-.32,.09,-.49,.05,.15,-.48,-.33,-.26,-.26,-.14,-.15,-.12,-.29,-.2,-.41,-.16,-.26,-.44,-.36,.11,-.43,-.01,-.12,-.25,.05,-.36,.05,-.28,-.28,.01,-.32,.14,-.32,.25,-.6,-.25,-.1,-.31,-.12,-.02,-.6,.17,.09,-.04,-.23,-.13,.08,-.2,-.28,.13,-.02,-.21,-.13,-.09,.09,-.14,.05,-.15,.11,.14,-.05,-.66,-.58,-.43,-.14,-.26,-.08,.14,-.24,-.51,.42,-.15,.46,-.24,-.23,-.22,.09,.48,-.12,.05,.12,-.09,-.16,-.65,-.05,-.03,-.31,-.56,-.15,-.06,.07,-.03,-.05,-.32,.2,-.14,-.2,-.05,-.13,0,-.49,.14,-.3,.49,-.14,-.14,.11,.26,-.12,-.25,.25,.21,-.28,.07,.14,.01,.08,-.25,-.4,-.05,-.19,-.14,-.04,-.28,.17,.55,.37,-.1,-.15,-.16,-.28,-.18,-.12,.02,-.07,-.17,-.44,-.41,-.26,-.26,-.07,-.09,-.65,-.37,-.37,.36,-.5,-.25,-.42,-.31,.68,.04,.06,-.32,.35,-.4,-.09,-.11,-.05,-.48,-.24,-.18,-.17,-.22,-.06,-.24,-.22,.09,-.14,-.19,-.18,-.15,.04,-.1,-.26,-.11,-.35,-.01,-.2,-.17,-.12,-.1,.04,-.14,-.09,-.06,.06,-.3,.05,.2,-.1,-.05,-.15,.4,-.4,.16,-.08,.23,.25,-.28,.07,-.27,.04,-.4,-.08,-.49,.26,-.08,.21,-.11,-.21,.14,-.51,-.28,-.29,.11,.17,-.38,.23,-.19,.12,-.22,-.06,-.36,-.37,.07,.04,.14,-.34,-.17,0,.13,-.04,-.34,-.21,-.25,0,0,.34,-.41,-.34,-.46,-.16,-.19,.15,-.2,-.11,-.15,-.05,-.33,-.09,-.37,.1,-.27,-.37,.59,-.34,-.13,-.52,-.05,-.15,.36,-.39,.21,-.16,.12,-.21,.02,.11,-.3,-.23,-.05,-.41,0,-.05,.04,-.35,.23,.05,-.3,-.01,-.03,.04,.03,.07,-.01,.18,-.43,.01,-.18,-.21,-.19,.54,-.22,-.19,-.18,-.21,-.12,-.15,-.37,-.45,-.34,-.13,.45,-.19,-.03,-.26,-.4,-.24,-.09,-.17,.51,.14,-.04,-.02,-.26,-.12,.16,.27,.12,.01,-.13,-.25,-.16,-.53,-.19,-.57,-.03,-.37,.09,.51,.18,.28,.38,-.32,-.1,-.3,-.12,.32,-.05,-.08,.19,-.31,-.38,-.23,-.24,.03,-.16,.22,-.31,-.25,-.22,-.07,-.44,-.07,-.25,-.43,-.21,-.24,-.16,-.2,-.09,-.2,-.31,-.18,.44,-.22,.21,-.37,.03,-.19,-.28,-.24,-.2,-.32,.04,-.34,.05,.11,.13,-.16,-.03,-.11,.19,-.1,-.32,-.06,-.35,-.35,.3,.05,.74,-.49,-.24,-.28,-.05,-.18,-.29,.2,.57,.05,.44,.37,-.19,-.11,.29,.05,-.09,-.06,.04,-.39];export{a as rvalData};
