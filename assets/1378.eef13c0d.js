const a=[.18,-.21,-.4,-.03,-.44,.12,-.34,.45,-.15,.1,-.32,.02,.03,.27,-.42,.07,-.36,.02,.04,-.05,.03,.03,.21,-.53,-.41,-.4,-.09,.09,-.13,-.17,-.18,.07,-.24,-.17,-.27,.05,-.42,-.46,-.2,-.14,-.06,-.44,-.17,.08,.02,-.26,-.37,.02,-.13,.23,-.15,.16,.03,-.52,.28,-.39,-.11,.09,.16,-.59,.01,-.21,-.33,0,-.09,-.04,-.37,-.47,.03,-.07,.17,-.24,.08,-.03,-.54,-.09,-.11,.01,-.32,-.17,.15,-.68,-.1,-.45,.02,0,-.42,.05,.44,-.39,.3,.09,.18,.59,-.1,.25,.34,-.02,.17,-.06,.01,-.4,-.07,0,-.02,-.09,-.24,-.3,-.26,-.14,-.14,.32,-.09,.34,.31,-.46,-.43,.1,.16,-.38,.08,-.03,-.04,.08,.55,-.05,-.4,.1,-.1,-.43,.63,.81,-.04,.42,-.23,-.03,.59,.06,.01,-.13,-.22,-.16,-.24,-.39,.01,.36,0,.14,-.23,.19,-.47,.19,-.05,-.03,.55,.42,.15,.05,.03,-.47,.73,-.08,.11,.03,.11,-.01,-.24,-.01,.28,-.55,-.01,-.05,.58,.65,.02,-.04,-.01,-.2,.15,-.44,-.21,-.11,.12,-.4,.12,.07,-.01,.1,.38,.09,-.02,.27,-.07,-.17,-.15,-.27,-.24,-.15,-.01,.14,-.41,-.25,-.44,.18,.23,.05,.47,.35,.19,.11,.59,-.52,.14,-.49,.08,-.22,-.02,.45,-.07,.04,.03,0,-.22,-.47,.02,-.44,.59,.06,.22,.3,.13,.11,-.42,-.36,-.06,-.05,-.47,-.25,.13,-.11,.28,-.63,.51,.59,.27,.5,-.11,.07,-.04,-.06,.28,.13,.24,.12,-.25,.02,.2,-.34,.14,-.43,-.06,.32,-.16,-.22,.19,-.04,-.2,-.28,-.03,-.41,.1,.02,-.39,-.29,-.33,-.03,-.19,.14,-.4,-.1,.5,-.03,-.5,.27,.41,0,-.12,-.45,.14,.13,.44,.27,-.21,.41,.17,-.19,-.09,.06,.12,.27,.1,-.37,.02,0,-.11,0,.37,-.04,.24,-.18,-.5,.04,-.09,-.02,.17,.28,.23,.31,-.32,.12,-.39,.17,-.45,-.41,.49,.36,-.16,.31,.32,.33,.39,.04,.12,-.1,.03,-.16,-.11,.22,.5,.26,.1,-.28,.04,-.02,-.47,-.32,.04,.32,-.1,.47,-.17,.6,0,.36,.21,-.49,.17,-.06,-.41,-.43,-.41,-.03,.39,-.21,.24,.22,.2,-.45,-.07,-.08,-.16,-.03,-.22,.2,-.02,.16,-.05,-.32,.07,.37,.05,.07,-.11,.02,.13,.12,-.04,.05,-.11,-.16,-.27,-.04,-.19,.42,.38,-.38,.05,-.03,.28,.48,0,.21,-.28,-.19,.33,-.06,-.53,-.23,-.28,-.14,-.32,.32,.39,-.3,.3,.03,-.29,-.35,.49,.19,.14,-.37,.09,-.04,-.51,-.44,-.26,.03,.29,.72,.52,.24,-.37,.04,.48,-.63,.35,-.18,-.44,-.12,-.09,-.47,-.26,-.16,.1,.01,-.35,-.14,-.13,.15,.03,.08,.37,.23,-.12,.2,-.11,-.41,.23,-.13,-.49,-.08,.32,.07,.41,.2,.12,.11,.3,-.48,-.29,-.49,-.18,-.04,.43,-.22,-.11,0,-.24,0,-.14,-.54,-.21,.04,.09,.28,.27,.59,-.17,-.3,-.07,.01,.18,.6,-.3,-.48,.45,-.12,-.19,.56,.46,.22,-.21,-.4,-.5,.29,.09,-.13,-.22,.07,-.28,.29,-.33,.07,.09,-.07,.41,.46,.18,-.44,-.14,-.35,.26,.03,-.4,-.03,.37,.05,.02,-.01,.44,.46,.09,.7,.01,.02,.25,.08,.37,.04,.04,.31,.02,-.12,-.02,.14,.3,-.12,-.36,-.02,-.13,-.44,-.36,-.33,-.18,.09,.03,.56,-.13,.11,-.29,-.08,.28,.5,-.04,.09,.15,-.05,.43,.09,-.24,-.4,-.24,.71,-.38,-.45,-.07,.51,.25,-.32,-.05,.08,-.18,.24,.04,-.63,-.39,-.45,.1,-.42,-.01,-.07,.09,-.27,.51,.32,-.21,-.45,.04,.4,-.23,-.57,-.36,.2,-.07,-.1,.54,.07,-.08,-.02,-.1,-.39,.04,.28,.17,.11,-.35,.5,-.11,.08,.24,.44,.22,.04,.37,.1,-.07,.19,-.22,.54,-.1,.19,.24,.16,.07,.03,-.21,.59,.37,-.04,.15,-.51,.17,.09,-.3,-.24,.45,-.41,.08,.07,-.04,.33,.61,-.4,-.22,0,-.51,-.09,.06,-.04,-.36,-.23,-.37,.36,-.15,-.04,-.09,.25,-.37,-.48,-.23,.05,.02,-.11,.06,.68,-.31,-.61,.25,.03,.18,.26,-.33,-.27,.21,.01,.23,-.38,-.3,.49,.02,.2,.31,-.01,-.04,.26,-.06,-.04,-.34,.29,-.41,.29,-.03,-.29,.11,-.14,-.04,-.34,.11,-.14,-.38,.61,.25,.41,.08,-.06,.08,.16,.09,-.04,.34,-.16,-.42,.06,-.51,-.32,.28,-.15,.15,-.27,.2,.26,-.16,.07,.16,.64,-.44,.03,.05,.06,-.39,-.04,.16,-.17,-.05,.25,-.21,-.4,.24,.01,.08,.17,-.01,.03,-.41,.08,.29,-.35,-.09,-.13,-.52,.06,-.27,-.05,-.32,-.49,-.25,.17,-.02,-.11,.43,.26,-.43,-.03,.4,-.03,.21,.37,-.35,.21,-.36,.28,.17,-.25,-.3,-.02,.26,.1,.17,-.06,0,.31,-.08,-.49,-.39,-.06,-.39,-.26,.17,-.1,.13,-.21,.19,-.38,-.33,-.12,.03,.26,.33,0,.09,.16,-.14,-.01,-.16,.43,.27,-.18,-.24,-.39,-.09,-.25,.54,-.41,-.22,-.52,.12,.22,-.07,-.08,.22,-.43,.12,.13,.03,-.1,-.12,.31,-.1,.11,-.02,-.6,.01,.5,-.14,-.42,-.33,.1,.07,.01,.21,-.1,-.15,.16,.15,.08,.34,.33,.24,-.01,-.22,-.48,.22,.24,.25,.55,.01,.04,.29,.68,.37,.1,-.05,.41,.12,.31,-.11,.2,.08,0,-.03,-.14,.13,-.41,-.42,.09,.11,.02,-.16,.47,-.39,.3,.23,.21,-.13,.08,.14,.11,-.24,-.47,.14,.14,.1,-.1,-.01,-.17,-.18,.63,-.16,.61,-.09,-.17,-.15,.5,-.29,.21,.12,.51,.68,.03,.17,-.12,.49,-.39,-.16,-.44,.01,-.46,-.23,.24,.3,-.28,-.42,-.46,-.44,.39,.18,.06,-.31,-.42,-.09,.35,.28,-.37,.46,.09,.36,-.24,-.12,-.2,.44,-.06,.19,.34,.61,-.39,-.41,.05,-.42,.14,-.26,-.11,.44,.11,-.21,.07,-.01,.55,.33,.01,-.04,.24,-.63,.34,-.34,-.26,.43,.42,.27,-.09,-.49,.72,0,.4,.43,.5,.65,0,-.01,.09,.11,.64,.5,.54,-.01,.39,-.17,.31,-.11,-.01,.03,.05,-.03,.08,-.07,-.45,.06,-.16,-.02,.11,-.01,-.01,.2,-.1,.19,.14,.05,.26,.33,-.21,-.47,.13,-.15,.18,.07,.11,-.19,.05,-.09,-.1,.65,-.05,0,.34,.07,.04,-.44,.23,-.17,-.11,.76,-.44,-.4,.03,-.04,.43,-.01,.16,.05,-.26,.25,-.07,-.2,.5,-.15,.02,.11,.19,.13,-.26,-.06,.07,.34,-.48,.09,-.03,-.07,-.26,-.4,.03,.31,.1,0,-.33,.12,.12,-.46,.65,-.09,-.6,-.09,.13,-.07,.03,.13,-.14,-.21,.32,.05,-.38,-.09,.31,-.39,.16,-.32,-.25,.54,.17,-.26,-.24,.51,.05,.58,-.36,-.26,-.12,-.15,.04,-.11,.24,.04,.28,.13,.05,-.02,-.03,.12,-.5,.26,-.4,-.25,-.6,-.03,-.16,.09,.02,-.03,-.53,.29,-.07,.37,-.22,-.5,.25,-.19,-.43,-.28,.43,-.04,.14,-.34,-.12,-.01,-.4,-.26,-.01,-.38,-.08,-.29,.35,-.05,.11,.1,-.2,.03,.33,-.02,.26,.11,-.02,-.38,-.11,.21,.12,-.27,.08,-.42,-.35,-.33,.12,.49,.02,.18,.37,-.07,-.23,-.46,-.07,-.54,-.12,.57,.22,.14,.56,.13,-.18,-.48,-.45,.04,-.36,-.08,.46,.47,.17,-.34,-.04,.14,-.37,-.18,-.35,-.03,-.19,.02,-.39,.31,-.14,.25,-.35,-.32,.59,-.33,-.32,-.04,.69,-.22,.08,-.21,-.38,-.55,.16,.11,-.45,-.25,-.01,-.06,.3,-.08,-.08,.1,.29,-.11,.53,-.23,-.02,-.45,-.23,-.42,0,.06,-.01,-.45,-.37,-.37,.24,-.02,.02,-.05,.03,-.04,.12,-.37,.26,.26,.3,-.09,-.07,.08,.18,.5,-.22,.36,-.31,-.14,.72,-.06,.05,-.08,.05,.18,0,-.5,.15,-.26,-.74,0,.58,-.11,.14,.55,.05,-.04,.2,-.27,.28,-.09,.01,-.37,-.24,-.01,.04,.29,-.47,-.32,-.03,.64,.2,.37,-.26,-.24,-.12,-.27,-.18,-.1,.05,-.25,-.45,.02,.52,-.45,-.06,.08,-.31,.4,.14,.3,.1,.18,-.17,-.44,-.17,.02,.27,.15,.42,.44,.26,-.38,-.42,-.16,0,-.03,-.3,.75,.18,-.04,-.27,.72,-.06,-.14,-.11,.08,.14,-.3,-.33,.14,.05,-.18,.06,.02,.06,.18,.35,-.03,-.14,.07,.34,.32,.36,.38,.54,.08,-.11,.06,.6,.69,.61,-.1,.44,-.18,-.23,.16,.41,.4,-.39,.36,.63,.8,1,.3,.74,-.32,.73,.75,-.03,.61,.02,.11,-.08,.12,-.21,.44,.09,.36,.17,-.44,-.35,.51,-.2,-.31,.01,.63,-.04,-.29,-.35,-.12,-.48,-.11,.17,-.18,.17,-.09,-.23,.1,.3,.11,-.49,.09,-.1,.13,-.06,-.14,.07,-.11,.13,.03,-.15,-.09,.08,.01,-.43,.06,.24,-.39,.21,-.53,-.38,.12,.14,.26,.13,.21,-.34,.78,-.44,-.14,.62,.03,-.05,-.05,.13,.17,.68,-.08,-.38,-.52,-.28,-.01,.3,-.07,-.01,.05,.24,-.13,0,.26,-.21,-.04,.05,-.11,.08,.21,.1,.8,-.01,-.23,.22,-.08,.07,.15,.04,.42,-.08,-.12,.03,.7,-.16,.25,.43,.08,-.01,.84,-.3,.2,.36,.08,-.1,-.09,.11,-.1,-.28,.39,.16,-.53,.13,.09,.22,-.46,.28,.23,-.39,-.44,-.27,-.34,.25,.12,-.22,-.49,.17,-.16,-.43,.24,.25,.23,-.08,-.09,-.05,-.23,-.08,-.11,-.12,.16,-.24,.35,.09,-.25,-.07,.32,-.04,.09,-.34,-.14,.24,-.26,-.16,-.12,0,.35,.23,-.24,-.31,-.12,.08,-.19,-.29,-.15,.25,-.2,-.44,-.13,-.13,-.27,.02,-.34,-.3,.07,.48,-.09,.04,-.57,.03,-.23,-.29,-.26,-.2,-.01,-.1,.37,-.14,.02,-.51,.65,-.11,-.24,-.1,-.21,.18,.33,-.51,-.26,-.33,-.38,-.07,.1,.38,-.26,.57,-.38,.37,-.04,-.43,.14,-.12,-.12,-.08,-.48,-.33,-.06,-.05,-.28,.07,.17,-.33,.15,-.08,-.23,.16,.1,-.11,.19,-.21,.12,-.34,.06,.17,-.28,.4,.12,-.05,-.06,.11,-.45,.05,-.13,-.18,.19,.11,.4,-.38,-.22,-.11,-.22,-.33,.24,-.2,.45,.34,0,-.11,-.01,-.23,-.14,-.39,.02,-.27,.28,0,.07,.3,.04,.58,-.03,-.38,-.35,-.08,-.14,.37,-.36,.27,-.08,.18,.38,0,-.32,.73,-.18,-.02,-.22,.03,-.38,-.09,.1,-.39,-.05,.23,-.28,.19,.1,-.56,.17,.52,-.15,.17,.07,-.04,.03,-.22,-.27,-.46,.67,-.23,-.63,-.45,-.33,-.38,-.37,-.01,.06,.21,-.34,.06,-.1,-.15,.14,.1,.28,-.4,-.41,-.32,-.07,-.65,-.22,-.18,-.11,-.19,-.26,-.24,.01,.07,-.13,-.14,-.04,.19,.41,-.28,-.13,-.01,.73,-.07,.31,-.17,.01,.1,.24,.04,-.27,.05,-.36,-.27,-.2,-.28,-.07,-.16,-.06,-.32,-.03,-.13,-.04,-.1,.63,.08,.39,.08,-.17,.1,-.03,.07,.18,-.01,-.13,-.11,.17,-.56,-.43,.19,-.3,.63,-.02,-.01,-.13,-.31,-.42,-.46,-.72,-.07,-.1,-.31,-.08,.11,-.07,-.48,-.37,-.24,-.25,-.17,.15,.1,-.01,-.16,-.32,-.33,.3,-.11,-.3,.1,-.48,.11,.18,.05,-.2,-.32,-.42,-.36,-.45,-.49,-.26,-.05,-.13,-.05,.18,-.23,.51,-.01,.37,-.18,-.4,-.12,-.07,.29,-.41,.28,-.36,-.02,.04,-.1,-.07,-.03,.06,-.34,.6,.32,.61,-.16,.08,-.42,.6,.65,-.34,-.2,.15,.01,-.43,-.01,.47,-.1,.22,.15,-.33,.73,.6,.35,-.11,-.3,.17,.64,-.13,.17,.03,.47,-.54,-.04,-.4,-.02,-.43,.43,.26,.33,-.01,-.19,.13,-.22,-.03,.56,.04,0,-.24,-.22,-.37,-.11,.05,-.22,-.38,.34,-.03,-.02,-.06,.28,-.38,-.34,.2,-.16,-.31,-.25,.23,.12,-.31,-.49,-.12,.64,-.12,.1,0,.13,-.01,-.25,-.34,-.11,-.11,-.38,.3,-.1,-.44,.28,-.07,-.22,-.05,-.08,0,-.39,.08,-.43,.36,.01,.16,-.06,-.27,0,-.06,.13,.22,-.11,-.43,-.43,-.3,-.09,-.35,-.39,-.45,-.29,-.19,.08,.18,.07,-.43,.42,-.3,.02,.03,-.24,-.54,-.4,.77,-.53,.12,.02,-.38,-.38,.24,-.08,.24,-.07,.11,-.35,-.14,-.47,-.41,-.44,-.37,.12,-.02,.13,.09,-.25,.27,.07,-.2,-.32,-.51,.34,.19,.3,.27,-.28,-.17,-.39,.3,-.44,.03,.33,-.22,.3,-.47,-.19,-.45,-.03,-.4,.14,-.21,-.52,.41,-.21,-.3,-.38,-.18,-.42,-.45,-.48,-.11,-.44,-.54,.03,-.15,-.49,-.52,-.54,-.4,-.54,.79,-.19,-.29,.57,.15,-.5,-.01,-.36,.82,-.07,-.22,-.07,-.55,-.44,-.13,-.06,-.16,.57,-.44,.41,-.26,-.02,-.24,.11,-.17,-.15,.04,-.02,-.06,-.14,.15,.53,-.39,.06,-.1,-.09];export{a as rvalData};
