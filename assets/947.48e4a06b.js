const a=[.15,-.08,-.3,-.16,-.21,.22,-.07,.83,.56,.17,.18,-.28,.02,.06,.01,.01,-.04,-.09,-.13,.16,-.02,-.39,.1,-.06,.3,.11,-.59,0,-.13,-.59,.18,-.33,.04,-.15,-.19,.06,-.13,.11,-.05,-.25,.05,-.03,-.06,-.02,.06,.16,-.12,.1,-.14,.53,.35,-.05,-.26,-.07,.26,.32,.36,.15,-.13,-.04,.35,-.07,.06,.07,-.12,-.58,.05,-.03,.1,.03,.08,-.13,.55,-.23,-.2,-.07,-.05,.37,-.2,-.24,.11,-.06,.11,.01,-.26,-.37,.19,.12,.13,-.03,.08,0,.84,.08,-.04,.18,.16,-.14,-.14,.42,-.08,.03,.01,.04,.2,.06,-.17,-.1,.17,.02,.13,.47,.08,.19,-.08,-.2,-.24,-.41,.12,.43,.11,-.13,.16,.15,.29,.34,-.23,0,-.49,-.07,.77,.5,.11,.53,-.2,-.04,.51,.15,-.44,-.06,.01,-.03,.23,.23,.12,.26,.11,-.11,.23,.15,.01,.84,.04,.21,.9,.16,-.07,-.12,0,.08,.43,.02,.2,.28,.85,.41,-.11,-.41,.25,.11,.08,-.31,.64,.53,.17,-.29,.09,-.5,.52,-.09,.02,-.08,-.01,-.49,.22,.21,-.01,-.04,.41,-.03,-.02,.76,-.1,.47,.26,-.13,-.04,-.02,-.08,-.35,.28,.49,-.02,.11,.19,.05,.23,.5,.5,0,.84,-.03,-.09,.02,.12,.24,-.04,.87,-.35,-.09,.12,.15,-.11,-.12,.26,-.07,.79,-.39,.13,.12,0,-.02,.03,-.39,-.06,.09,-.13,.18,-.01,.05,.47,-.13,.85,.54,.91,.82,-.15,.28,-.2,-.07,.38,-.12,.27,.19,-.04,.04,-.07,.39,.06,-.48,-.02,-.04,.52,0,.02,.17,-.19,.11,.26,.18,-.32,.07,-.01,-.25,-.01,-.11,-.52,.49,-.09,-.13,.54,-.25,.25,.07,.29,.35,-.32,.03,.1,-.33,.67,.38,.12,.79,.56,-.08,.44,-.13,.37,.16,.16,-.31,-.4,.06,-.17,.19,.04,.22,.04,.29,.09,-.02,-.11,.11,-.19,.15,.16,.12,-.31,.03,.06,-.16,-.05,.02,.39,.3,.03,-.19,.23,.29,.26,.22,.04,-.08,-.53,-.17,-.49,.18,.68,-.08,.64,-.23,-.12,.02,-.14,-.28,.04,.41,-.02,.5,.18,.5,.08,.29,.24,.27,.1,-.17,-.21,-.44,.35,.15,.25,-.05,.06,.17,.01,-.08,.13,-.06,-.4,-.05,.53,.35,.22,.28,0,.06,.02,.23,.06,-.07,0,.07,.05,.07,-.15,-.17,-.07,-.09,-.12,-.03,-.08,.49,.51,-.3,-.27,-.09,-.2,.25,-.38,.15,-.19,.49,.37,-.12,-.09,-.15,.1,-.06,-.29,.17,-.01,-.1,.04,-.03,-.01,-.3,.54,.3,.22,-.02,-.28,.05,.27,-.14,-.14,-.17,.33,.42,.87,.31,.45,.05,.45,-.22,.52,.02,-.14,.16,.01,.17,.21,.36,.32,.25,-.29,.11,.57,-.16,.64,.4,-.06,.03,.05,0,-.35,-.12,.28,.42,-.24,.09,.17,.4,.16,.11,-.01,.18,-.15,-.1,-.09,-.14,-.07,0,.35,.21,.27,.78,-.19,-.36,.16,-.07,-.25,.81,.28,.15,.27,.38,-.13,-.43,-.04,-.26,.45,.14,-.19,-.01,.25,.08,.09,.5,.39,-.15,-.09,.02,.01,.13,-.18,.17,-.18,.32,.08,.22,.11,.17,.31,-.33,.28,.73,.45,.01,-.31,-.26,.08,.03,-.2,0,.13,-.18,.18,.27,.7,.26,.16,.54,.08,.19,.12,.09,.18,-.19,0,.08,-.05,-.49,-.04,.02,.2,-.52,-.19,-.08,-.41,-.07,-.17,-.41,.26,-.02,-.2,.5,-.01,.1,-.24,-.34,.28,.86,.13,.06,.01,-.05,.3,.09,-.26,-.36,.45,.46,-.16,-.31,-.03,-.02,.32,-.13,-.08,.03,.11,.13,.35,-.13,-.22,-.11,-.2,-.15,.14,.06,-.08,-.21,.88,-.11,.26,-.32,.19,.59,.03,-.15,-.33,.4,-.18,-.6,.37,.03,-.05,-.19,-.05,-.12,-.02,.75,0,.2,-.28,.82,-.13,.02,.38,.31,.21,.06,.23,-.25,.45,.05,0,.77,-.01,.33,.12,.39,.05,.26,.16,.62,.62,-.42,.17,.06,-.22,-.04,-.16,.01,.25,.03,-.11,.34,-.18,-.1,.65,-.17,.21,.09,-.15,-.01,0,.2,-.3,-.13,-.09,.08,-.09,-.04,.04,.14,.38,.1,.45,-.09,-.06,-.55,.05,.32,.18,-.18,-.01,.08,.24,.06,-.28,.04,.37,.16,.07,.08,.17,.75,.04,.02,-.01,.02,-.05,.54,-.03,.11,-.16,.12,.02,.91,.68,-.12,.02,-.08,-.14,-.34,.11,-.53,.2,.56,.16,.66,-.09,.02,.56,-.05,.09,-.03,.87,-.06,-.13,.17,-.07,-.31,.08,-.37,-.06,-.28,.03,.32,-.09,-.18,.57,.53,-.1,.04,-.1,.07,.06,-.04,-.2,-.56,.1,.19,.48,-.14,.3,.37,-.03,-.1,-.33,.3,-.1,.28,-.01,-.51,.04,-.22,-.41,-.44,.16,.06,-.45,-.15,.01,-.02,0,.17,.12,.14,-.11,.12,.32,-.04,.4,.98,-.16,.14,-.28,-.12,-.03,.04,-.36,-.01,.29,.45,-.14,-.35,-.32,.18,-.07,-.06,.02,-.42,-.25,.23,.11,.04,.61,-.03,.02,-.06,-.08,.27,.74,-.14,.04,-.03,-.02,-.11,-.09,-.27,.07,.64,.13,-.25,-.19,-.14,-.21,.42,.85,-.07,.04,-.12,.07,.19,-.16,.02,-.01,-.03,.15,-.21,-.09,-.29,-.07,.37,0,-.33,0,-.02,.11,.7,-.23,-.19,-.08,-.27,.7,-.01,.23,-.48,.48,.16,-.03,.02,.07,.08,.85,-.08,.42,-.11,.02,.05,.04,.25,-.2,.07,.57,.85,.37,.11,.03,.32,.21,.06,-.15,.38,.07,.11,-.56,.3,.18,-.06,-.11,.3,.33,.28,-.08,.82,-.03,.11,.15,.3,-.12,-.06,-.03,0,-.19,.14,.26,-.08,-.08,.08,.02,.26,.1,.52,-.07,.58,.01,-.55,-.33,.26,-.18,.33,-.01,.5,.72,.15,.29,0,.29,-.05,-.07,-.26,.12,-.26,-.14,.04,.77,-.32,-.2,-.07,-.03,.16,.53,-.1,.06,-.09,-.2,-.05,.16,.14,.28,0,1,-.06,-.01,-.01,.89,.13,.1,-.02,.67,.07,-.02,-.24,-.04,.2,.18,.03,.75,.16,-.03,.15,.03,.41,.19,.17,-.36,.11,-.18,.14,.01,.32,.33,.12,.59,.21,-.08,.73,-.34,.91,.7,.85,.39,.05,-.01,.19,.48,.74,.63,.76,.06,.39,0,.27,.1,-.08,.04,-.04,-.14,-.1,.01,-.26,-.08,-.16,-.12,-.11,.13,.44,.42,-.37,.36,-.01,.71,.3,.06,-.08,.04,.01,.06,.23,.08,.18,.11,.24,.01,-.11,.5,.04,0,.23,.05,.53,.03,.75,-.02,.14,.49,-.26,-.33,-.07,.06,.33,-.04,.13,-.09,-.14,.37,.4,-.22,.55,.21,.17,-.2,.24,.14,.2,-.33,0,.49,.13,.33,.22,-.46,.45,-.29,-.09,.39,.33,.21,-.33,-.11,.49,-.21,.51,.11,-.12,.05,-.25,-.03,.01,.46,-.33,.05,.17,-.37,.32,-.04,.02,-.13,-.27,-.43,.08,.85,.13,.06,0,.76,-.13,.46,.44,-.26,.47,.05,.08,.05,-.01,-.11,.5,.44,.01,-.26,-.27,.07,.18,.36,-.02,-.18,-.19,-.15,-.08,.02,.07,.1,-.23,.03,-.16,.4,-.02,-.2,.15,.05,-.26,.17,.29,.16,.24,.05,-.24,.24,.12,.01,.11,.13,-.5,-.21,.49,-.02,-.01,.28,-.12,.07,.21,.09,.48,.04,.08,.46,.37,-.05,.51,.16,.04,-.11,-.03,-.12,.42,.26,-.14,-.13,.24,.29,-.12,-.13,0,.16,.09,.58,.06,.04,.26,0,0,-.21,-.1,-.14,-.42,-.16,.68,.55,-.03,-.07,.05,.03,-.06,-.04,-.43,-.05,.24,.06,-.08,.15,.07,.16,-.37,-.44,.81,-.24,-.39,-.13,.43,-.05,.06,.33,.01,-.28,.15,.16,.13,.22,.13,.1,.09,.03,-.39,-.06,-.03,-.56,.19,.06,-.07,-.27,.46,.16,0,.01,.09,-.11,-.03,-.22,.12,.11,.08,-.13,-.03,.28,.12,.1,.19,.04,.07,-.03,.51,.21,-.17,.9,-.04,.09,-.23,.55,.55,-.39,.11,-.61,-.43,.69,-.04,-.13,.09,.11,-.18,0,.78,-.12,-.03,.64,.04,.24,.18,.31,.64,.4,.03,-.26,-.14,-.02,.07,-.03,.1,.02,.31,.18,.39,.04,-.14,.27,.15,.17,.47,.53,.21,-.17,-.19,.4,.32,-.06,-.22,.11,-.28,.22,.04,.09,-.01,.33,.35,-.14,-.04,.22,.19,.01,.38,.21,.17,-.47,-.09,-.25,-.33,-.06,-.1,.3,.23,-.19,-.04,.71,0,.04,.19,.76,.15,.13,.04,.4,.22,-.16,.28,.03,-.06,.45,.49,.07,.32,.19,.38,.34,.52,.02,.6,.17,.14,.04,.55,.4,.58,.24,.46,-.04,-.17,.16,.53,.54,.02,.33,.38,.54,.36,.15,.65,-.07,.67,.65,-.13,.65,.28,.07,.06,.37,.12,.25,.16,.35,.36,-.08,-.19,.63,.2,-.15,.02,.55,-.08,-.4,-.31,.18,0,.24,.46,-.22,.07,-.01,-.18,.11,.22,0,-.04,.1,-.25,.21,-.08,.15,.12,.12,.46,.46,.02,-.01,.06,-.04,.13,.18,.35,.05,.16,.02,.23,.05,-.03,.58,.05,.16,-.16,.66,.03,-.02,.64,-.03,-.2,.08,.18,.17,.54,-.12,.44,-.03,.2,-.03,.43,-.22,.03,-.12,.06,.02,-.33,.3,.1,-.01,.03,-.17,.04,.33,-.01,.57,-.37,.01,.09,.16,.14,.33,-.03,.38,.1,.02,.17,.51,.14,.33,.48,.08,.16,.57,.04,.38,.25,-.17,.11,-.04,.15,.04,.2,.32,.55,-.06,.38,-.13,.41,-.1,.36,.05,.3,.35,.06,.03,.52,.07,-.05,-.06,.15,.11,.12,.09,.16,.39,.1,-.08,-.07,-.02,.11,-.07,-.5,.03,.17,.48,.39,.08,.11,.12,.01,.44,-.25,-.03,.36,-.2,.08,-.04,.4,.11,.38,.24,-.37,.21,.46,.14,-.1,-.07,.12,.16,-.39,-.01,.24,-.08,-.21,-.17,.27,.14,.7,.08,.28,-.13,-.1,-.09,-.24,.44,.12,.11,.31,.53,-.46,.3,-.06,.44,-.09,-.06,-.1,.2,.81,.58,-.18,-.27,.13,-.01,-.13,-.09,.55,.42,.7,-.3,.66,.13,.2,.09,.11,-.19,.35,-.12,-.24,0,-.13,-.31,.84,.59,-.3,0,.45,.57,.38,.28,.2,.38,.11,.17,.11,.08,.29,.25,.23,.01,.01,.06,.18,-.36,.13,.11,-.04,.4,.03,.48,-.09,.41,.11,.41,.12,.06,.44,.65,.44,.1,0,.13,.13,.07,.16,-.19,-.12,.04,-.07,.19,.77,.2,.3,-.08,-.14,-.31,-.01,-.12,.29,-.35,.44,.27,.37,-.07,.35,.04,.67,.19,0,-.03,.09,-.35,.26,.04,.01,-.12,.9,.07,.33,.05,.02,.44,.84,-.14,.37,.18,-.18,.08,-.06,-.18,-.03,.34,.07,-.15,.05,.33,.1,-.17,-.1,.27,.14,.12,.03,-.03,.06,.33,.18,.34,-.24,-.33,-.48,.12,.03,-.09,-.39,.55,-.21,-.13,.42,.75,0,-.2,0,-.12,.31,.21,-.3,.18,.24,.48,.42,.53,.06,.14,.21,.04,.07,-.06,-.1,-.37,-.04,-.15,-.27,-.1,.18,.01,.11,-.49,-.2,.03,.23,.38,-.09,.91,.06,-.23,.21,-.08,.13,.13,-.1,.06,.15,.01,.04,-.3,.49,-.27,.73,-.53,-.14,.07,-.06,-.26,-.09,-.35,.36,.17,-.06,.26,.35,.16,-.08,.22,-.17,.18,.43,.35,.25,.03,.18,-.09,-.1,.04,-.39,-.08,.06,.1,.23,.34,.05,.54,-.17,.14,-.38,-.27,-.19,-.15,.12,-.06,.11,-.15,.01,.19,.07,.33,.02,-.06,.17,.17,.11,-.34,.2,-.32,-.09,-.06,-.05,.02,.09,.16,.09,.3,.66,.66,.03,-.02,.04,.55,.4,-.05,-.18,.06,-.08,0,.01,.23,.2,.1,.09,.05,.66,.33,.18,-.15,.38,.04,.48,.1,.26,.11,.59,-.11,.05,.07,-.14,-.07,.6,.41,.45,.17,.2,.13,-.1,-.1,.08,.02,-.07,.08,.11,-.05,-.08,-.13,-.37,.09,.44,.06,.11,.07,.22,.05,-.29,.11,.11,-.03,.02,.1,-.05,-.07,-.03,-.41,.61,.35,.41,.28,.31,-.02,.3,.15,.05,-.08,-.22,.27,.07,-.03,.27,-.07,.28,-.28,-.07,-.18,.05,-.25,-.11,.09,-.01,.18,-.16,-.09,.29,-.01,.03,.12,.1,-.13,-.14,-.42,-.12,-.42,-.35,-.11,.13,.06,.19,.07,.27,-.03,.19,-.26,0,-.09,-.11,-.05,.13,.7,.13,-.11,-.06,-.28,-.21,.77,-.15,.22,-.37,.06,-.25,-.02,-.11,-.27,.1,-.19,.42,-.07,.55,-.13,-.27,.38,.11,-.49,.22,-.01,.43,.31,-.01,.23,-.28,.05,-.23,.11,.02,.11,.12,.4,-.11,.03,-.07,-.16,-.07,.09,-.03,-.1,-.13,.9,.11,-.41,.24,.14,-.1,-.03,-.22,-.11,-.1,-.41,.05,-.23,.02,-.04,0,-.14,-.1,.54,0,-.16,.39,-.22,-.06,.08,-.28,.57,-.09,-.05,0,-.12,0,-.27,.16,-.52,.59,-.2,.23,0,.21,.12,-.02,-.38,.04,-.41,.02,.15,.46,-.16,.03,-.09,.15,.14,.28];export{a as rvalData};
