const a=[.21,-.16,-.35,-.03,-.46,.28,-.24,-.19,-.16,-.46,-.02,.18,-.09,.34,-.03,-.06,-.1,.05,.07,-.03,.26,.77,-.06,.09,-.1,-.38,.73,-.12,-.04,.66,-.37,.83,-.34,-.21,.5,.03,-.27,-.07,-.34,-.34,.02,-.48,-.21,-.02,-.23,-.01,.07,.6,.56,-.45,-.17,.13,-.16,-.32,-.43,-.1,.06,-.23,-.15,-.32,-.5,-.36,-.49,-.02,.23,.47,-.42,.02,.05,-.06,.03,-.23,-.56,.11,-.49,.08,.25,-.55,-.17,.42,.25,-.28,.1,-.42,.19,.7,-.34,.07,.44,-.22,-.37,-.08,-.22,.11,.13,.1,.35,.25,.31,-.59,-.05,-.44,-.35,-.05,-.45,-.02,.06,.11,-.2,-.4,0,-.45,-.12,.21,.54,-.21,.15,.65,.72,-.21,-.04,.2,-.08,.08,-.03,-.42,-.37,.45,.28,-.3,-.09,.27,.08,-.49,.11,.26,-.36,-.34,.59,-.01,-.49,-.1,-.58,-.35,.03,.11,.08,.13,-.36,.13,-.45,-.35,.1,.09,-.21,-.17,.05,.15,.08,.01,-.26,-.39,-.03,-.4,-.24,-.6,-.14,.6,.24,-.35,.08,.45,-.26,-.27,-.29,.66,.12,.61,-.55,-.32,.07,.03,-.13,-.31,-.51,-.07,.09,-.05,-.34,.14,-.02,-.29,.02,-.48,-.56,-.14,-.43,-.07,.07,.72,-.22,-.41,-.33,.07,.33,-.32,-.09,-.38,-.39,-.1,-.23,-.03,.18,-.21,-.19,-.28,-.08,-.26,.67,.42,-.25,-.36,-.19,-.29,-.27,-.34,-.26,.68,-.19,-.35,-.08,.03,-.16,-.32,-.11,.01,-.07,.07,-.21,-.01,-.61,-.04,-.17,-.34,-.25,-.11,0,-.3,.07,-.08,-.25,.31,-.46,.08,-.46,.03,.01,-.3,-.23,-.31,-.09,-.3,-.3,-.49,.1,-.43,.22,-.37,-.18,-.37,.44,.03,-.31,-.37,-.3,-.06,.52,-.54,-.31,.57,-.54,.44,-.21,.08,-.23,-.15,.46,-.25,-.19,.78,-.04,-.53,-.27,-.1,-.04,-.24,-.15,.3,-.15,-.21,-.01,-.28,.59,-.08,-.06,-.14,.67,-.55,-.11,-.04,-.57,-.01,.13,.04,.17,-.2,-.25,-.34,-.37,-.34,-.49,.2,-.03,-.4,-.32,-.26,-.25,-.01,.36,-.26,.35,-.29,.05,-.19,.58,.16,.41,-.11,.16,.91,-.53,-.23,.13,.15,-.27,-.33,-.17,-.56,-.21,-.4,-.44,-.31,.01,-.23,.03,-.22,-.29,.16,-.4,-.33,-.22,-.15,-.24,.2,.15,.2,-.09,-.38,-.55,-.18,.55,.01,-.25,.29,-.53,-.23,-.13,-.37,-.08,-.34,.07,.1,.05,-.13,.16,0,.11,.05,-.16,-.23,-.36,-.08,-.16,-.09,-.06,-.3,.78,.07,-.08,-.02,.22,-.1,-.4,-.2,-.41,-.02,-.09,-.35,-.43,-.22,-.38,.23,.1,-.38,-.09,.02,-.49,-.03,-.55,.35,.01,-.25,.54,-.04,-.04,-.27,-.26,-.08,-.32,-.12,-.15,.33,-.2,.1,-.46,-.48,-.01,-.25,-.37,-.35,-.45,-.53,-.63,.01,-.55,-.2,-.26,-.34,-.1,.42,-.2,-.41,.44,.04,.08,.14,.8,-.36,-.09,-.22,-.46,-.29,.32,-.61,.09,.31,-.01,.11,.35,-.27,.1,-.34,-.16,-.01,-.4,-.1,-.27,-.2,-.15,.57,-.45,-.22,-.26,-.22,-.64,.04,-.21,.13,.05,-.32,.06,.21,.28,-.03,-.42,-.28,-.28,.01,-.11,-.2,-.35,-.1,-.39,-.22,-.56,.06,.04,0,-.16,-.65,-.53,-.05,-.66,0,-.59,.56,-.31,-.21,-.57,-.33,.15,-.33,.19,.08,-.33,.08,.09,-.24,-.11,-.31,-.37,-.26,-.11,-.29,.03,-.12,-.18,.11,.13,.18,.14,-.4,.01,.51,.44,.01,-.09,.54,-.5,-.11,.41,-.33,-.37,-.28,-.44,.03,.41,-.25,-.02,-.06,-.37,.52,-.13,-.04,-.18,.01,-.02,.04,-.34,.13,-.36,-.34,-.27,-.02,-.35,-.36,.03,.66,-.57,.07,.46,-.03,-.52,-.01,-.41,-.08,-.3,-.55,.49,-.25,-.06,.08,.06,-.47,-.13,.32,-.2,-.39,-.25,-.15,-.11,-.5,-.37,-.26,-.21,.67,-.39,.71,-.05,-.05,-.05,-.17,-.05,-.29,.03,-.08,-.3,-.11,-.08,.02,-.06,.11,.14,.02,-.06,.26,-.44,-.24,-.45,-.08,-.06,.24,.21,-.53,.15,-.37,-.1,-.43,-.02,.72,-.17,-.41,.81,0,-.07,-.45,.04,-.45,.32,-.4,.15,.42,-.26,-.29,-.1,.04,-.04,-.03,.02,.04,-.29,-.26,-.32,-.33,.01,.04,.04,-.08,-.32,-.45,-.23,.14,.08,.67,-.3,-.26,-.47,-.47,.19,.01,-.04,.15,-.25,-.28,-.1,-.09,.3,-.47,-.26,.11,0,.14,.12,0,-.12,.21,-.17,-.05,-.47,.38,-.47,-.25,-.36,-.42,.12,-.02,.17,.07,.07,.72,-.34,-.2,-.24,.05,-.08,-.11,.08,.08,.04,.14,-.19,-.31,-.23,.01,-.23,-.02,.17,.69,.23,-.34,.4,-.27,-.23,.11,-.4,-.37,-.25,.06,-.03,.03,.2,-.03,1,.55,-.04,.26,-.24,-.18,-.1,-.58,.17,.78,.28,-.25,-.36,-.05,.63,.24,-.11,.1,-.11,.6,-.13,-.14,.18,-.2,-.43,.1,.2,.1,-.08,-.19,-.39,-.02,-.4,.24,-.2,-.21,-.31,-.49,-.3,.51,.16,-.47,-.31,-.38,-.48,-.55,.32,.68,.73,-.01,-.31,-.01,-.33,.51,-.3,-.62,.19,-.43,-.02,-.23,.17,-.45,-.17,-.18,-.2,.44,-.38,.08,.21,.05,-.25,.62,-.31,-.33,.2,.51,-.12,-.29,.03,-.09,-.04,-.24,-.08,-.35,.21,-.17,.08,.01,.02,-.33,-.21,.06,-.06,.41,.03,-.1,-.11,.73,-.27,-.25,-.08,-.32,.58,-.43,.09,.74,-.52,.13,.17,.69,-.29,.17,.08,.09,-.34,-.39,-.21,.67,-.5,-.39,.6,.17,.13,-.36,.37,.22,-.4,-.15,.17,.12,-.16,-.39,-.14,-.41,-.01,-.05,.17,-.02,.6,-.19,-.01,-.52,-.29,-.22,-.32,.08,-.41,-.17,-.51,.21,.3,-.36,-.33,-.12,.29,-.02,-.35,-.41,.25,.15,.17,-.05,.11,-.09,-.08,-.38,.13,-.33,-.09,.58,.59,-.27,-.58,.08,.17,-.25,-.2,-.01,-.09,.13,.07,-.23,-.41,-.44,-.09,-.35,-.28,-.39,-.3,-.38,-.18,-.44,-.49,.31,-.54,.01,-.35,-.42,.18,.48,-.07,-.44,-.05,-.12,-.2,-.16,.05,-.14,-.16,.11,.03,.7,-.25,-.22,-.44,-.04,-.48,.33,-.17,.26,-.21,.05,-.42,-.13,-.16,.15,.47,-.03,.22,.26,.06,.33,-.32,.04,.08,-.09,-.52,-.14,-.41,-.19,.6,-.27,.03,-.17,-.26,.09,.13,-.25,-.46,-.15,-.43,-.16,-.1,-.27,-.07,0,-.21,.03,-.13,-.02,-.04,-.14,-.13,.13,.15,-.17,0,.15,.12,-.41,.07,.43,.27,0,-.27,.02,.1,.07,-.54,-.05,-.44,-.47,-.05,-.23,-.36,0,.05,-.06,-.25,.06,.1,-.21,-.06,-.48,-.24,-.11,-.13,.02,.08,-.29,.39,-.23,.07,-.39,.05,.09,.13,-.27,-.25,-.22,-.19,-.02,-.09,.4,.24,-.11,-.12,-.18,.45,.17,-.14,-.12,-.71,-.14,.55,-.17,-.37,-.03,-.46,-.47,-.25,-.26,.5,-.25,-.32,-.12,-.39,-.45,.01,.87,-.1,.07,-.46,.31,-.27,.04,.77,-.33,0,-.14,-.4,.79,-.28,-.48,-.04,-.02,-.28,-.22,.11,.47,-.31,-.16,-.22,-.16,-.33,.15,-.17,.49,.05,-.54,-.61,.05,.55,.41,-.01,-.13,-.33,-.33,.31,-.08,.28,-.04,.31,.01,.06,.03,-.36,.12,-.28,-.31,-.4,.02,.14,-.45,-.23,-.1,0,.2,-.31,.54,.01,-.15,-.5,.03,-.19,.02,-.31,-.09,-.06,.41,-.51,-.29,.03,-.32,.04,-.18,-.04,.03,-.18,-.22,.19,-.57,-.15,.04,-.34,-.37,-.42,-.46,-.32,.06,.31,-.21,-.44,-.08,-.23,-.05,-.32,-.03,-.27,.15,.35,-.42,.09,0,-.37,-.23,-.01,-.27,-.01,.11,.37,.52,-.29,.22,.05,-.42,-.43,.27,.45,-.25,.04,-.39,-.12,-.5,.27,-.3,-.38,-.26,-.3,0,.06,-.22,-.17,-.18,.11,-.46,-.51,-.21,.14,-.59,-.09,.02,0,-.34,-.09,.53,-.13,-.32,.34,-.19,-.41,.02,-.44,-.25,-.27,.03,.03,.02,-.23,-.4,-.27,.06,.01,-.01,.11,0,-.36,.04,-.36,-.06,.01,-.36,.1,-.05,-.3,.27,-.12,-.37,.49,-.23,-.12,.06,.26,-.23,.66,.63,-.44,.12,-.27,-.01,-.35,.18,-.2,-.1,.01,.31,-.1,.1,-.49,.29,-.01,-.27,.07,.01,-.31,-.02,.06,-.03,-.17,-.4,-.54,-.5,-.2,-.25,.66,-.39,-.24,-.6,-.17,-.3,-.26,-.07,.12,-.06,-.58,-.11,-.37,.22,-.38,-.3,.29,-.3,.13,-.11,-.51,-.16,-.29,-.1,-.32,.18,.01,-.34,-.19,-.1,-.26,-.53,-.27,.5,0,-.35,-.1,-.21,-.06,-.03,-.01,.06,.14,-.44,-.18,-.04,.16,.12,.21,-.07,-.05,-.44,.14,.1,-.4,-.17,-.18,-.22,-.16,-.19,-.42,-.43,-.03,-.19,-.03,-.27,-.03,.34,-.03,.1,-.37,-.34,.3,.43,.58,.29,-.01,-.21,-.29,.45,.36,.16,-.2,.31,.21,.28,.22,.2,.01,-.08,-.06,.02,-.52,-.32,-.16,-.02,-.33,-.47,-.3,.46,-.3,-.13,-.35,.11,-.34,.05,.03,-.34,-.12,-.04,.07,-.57,.24,-.04,-.37,-.38,-.09,.05,-.19,-.22,-.14,.24,-.2,.04,.25,-.08,.31,-.41,-.04,-.05,-.25,-.02,.2,-.15,.22,-.19,-.43,-.51,-.52,-.35,-.03,.28,-.53,.05,-.53,.05,-.1,-.47,.04,.02,-.04,.11,-.14,.17,.24,-.08,.06,-.21,-.49,-.26,-.15,-.35,.54,-.03,.11,-.19,.12,.6,-.4,-.32,-.23,-.14,-.02,.04,-.41,.19,.27,.69,-.42,.18,-.42,-.01,-.45,.02,-.01,-.07,-.01,-.17,-.11,-.08,-.41,.36,.05,-.39,.04,-.35,-.12,-.23,-.08,-.56,-.1,0,-.07,-.15,.05,-.12,-.57,-.5,.04,-.19,-.37,-.15,-.32,0,-.25,-.12,.03,-.35,0,-.1,-.54,-.11,-.35,.04,-.47,-.47,-.3,-.28,.11,-.02,-.44,.08,-.06,.68,0,-.26,-.25,.02,-.42,-.02,-.42,-.09,-.58,-.3,-.27,-.42,-.41,-.46,-.37,-.05,-.09,-.49,-.39,0,-.39,.16,-.42,-.52,.03,-.45,-.34,-.16,-.32,-.49,-.13,.11,-.4,-.47,-.27,-.41,-.23,-.58,.05,.12,-.32,-.41,-.15,-.35,0,-.23,-.33,.49,-.46,-.04,-.23,-.02,-.36,-.35,-.47,-.47,-.28,-.37,-.35,-.28,-.58,.64,.34,-.34,-.2,-.37,-.09,-.5,-.09,-.14,.17,-.27,-.17,-.12,-.24,-.34,.08,.26,-.18,-.23,-.44,-.38,.07,-.18,-.41,.05,-.59,-.45,-.23,-.4,-.04,-.39,-.01,-.4,-.07,-.27,0,.01,-.06,-.24,-.26,.11,-.16,-.29,-.35,.02,-.45,-.44,-.22,-.41,-.24,-.46,.01,-.16,-.12,-.46,.03,-.18,.06,-.38,-.53,-.46,.01,-.46,.01,.03,-.44,-.29,-.38,-.2,-.12,-.3,-.3,-.37,-.35,-.39,-.26,-.28,-.46,-.32,.27,-.5,-.08,-.03,-.4,.05,-.44,-.01,-.37,-.35,.14,-.44,.12,-.28,.21,-.52,-.25,-.15,-.28,-.06,-.01,-.48,.04,.09,-.06,-.4,-.27,.04,-.24,-.42,.05,-.04,-.33,-.29,-.28,.06,-.09,-.07,-.3,.13,.22,.05,-.61,-.55,-.36,-.29,-.35,-.17,.11,-.34,-.55,.5,-.2,.44,-.39,-.22,-.2,.24,.4,-.04,.11,.13,-.13,-.26,-.71,-.07,.01,-.4,-.47,-.32,.05,-.05,-.01,-.02,-.37,.19,-.26,-.3,-.18,-.3,.08,-.52,.09,-.4,.5,-.16,-.08,-.03,.3,-.12,-.26,.33,.16,-.14,.11,.07,.07,.1,-.34,-.41,.04,-.32,-.3,-.05,-.37,.21,.55,.43,-.01,-.3,-.32,-.43,-.22,-.08,-.09,-.15,-.22,-.47,-.5,-.29,-.37,-.24,-.26,-.62,-.39,-.42,.29,-.51,-.39,-.53,-.34,.65,.09,-.03,-.45,.32,-.49,.07,-.18,-.17,-.57,-.36,-.32,-.29,-.36,-.09,-.38,-.16,.12,-.22,-.25,-.11,-.16,-.09,-.18,-.39,-.17,-.43,-.17,-.28,-.32,-.09,-.05,-.05,-.12,0,.05,-.03,-.27,.1,.24,-.28,0,-.23,.43,-.46,.14,0,.2,.22,-.41,.05,-.31,-.05,-.49,-.17,-.61,.3,-.1,.29,-.04,-.29,.03,-.51,-.39,-.37,.06,.2,-.51,.19,-.37,.12,-.34,-.05,-.43,-.45,.07,-.04,.09,-.28,-.03,.09,.06,-.01,-.43,-.3,-.42,-.07,.18,.28,-.55,-.41,-.58,-.08,-.1,.23,-.37,-.26,-.19,-.08,-.47,-.27,-.44,.13,-.39,-.48,.56,-.34,-.13,-.51,-.16,-.04,.35,-.52,.11,-.1,.19,-.37,.03,.16,-.44,-.26,-.02,-.5,-.1,.13,.07,-.43,.41,-.09,-.31,.07,-.04,.08,-.07,-.1,.04,.14,-.47,.05,-.3,-.36,-.31,.51,-.27,-.31,-.33,-.37,-.31,-.27,-.42,-.49,-.5,-.22,.48,-.09,0,-.14,-.51,-.4,-.06,-.31,.54,.1,-.2,.02,-.3,-.06,.03,.24,.27,.07,-.03,-.3,-.31,-.61,-.29,-.55,.13,-.45,.08,.41,.18,.29,.37,-.38,-.21,-.36,-.06,.5,-.15,-.18,.17,-.42,-.45,-.4,-.29,-.02,-.25,.43,-.46,-.43,-.37,-.01,-.52,-.06,-.37,-.54,-.21,-.35,-.28,-.35,-.11,-.34,-.47,-.25,.43,-.35,.21,-.45,.17,-.33,-.43,-.4,-.33,-.5,.09,-.49,-.01,.05,.27,-.31,.04,-.26,.23,-.13,-.46,-.1,-.5,-.44,.24,.11,.68,-.41,-.39,-.33,-.13,-.17,-.46,.08,.55,.15,.54,.25,-.13,-.19,.25,-.12,-.28,0,.04,-.41];export{a as rvalData};
