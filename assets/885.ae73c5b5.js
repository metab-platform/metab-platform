const a=[-.54,.43,.69,-.15,.79,-.27,.17,-.22,.29,.31,.62,-.03,.05,-.62,.76,-.07,.21,.04,-.1,-.13,-.05,-.1,-.02,.61,.68,.74,-.02,.01,.07,.11,.36,-.14,.78,-.09,.19,.08,.84,.74,.29,.56,.03,.77,.38,-.13,.14,.63,.21,-.23,.2,.06,.25,-.14,.42,.73,.11,.55,.46,-.2,.21,.68,.09,.69,.62,-.13,.2,.08,.74,.77,-.01,0,-.08,.6,.03,-.1,.76,.03,-.02,.04,.56,.02,-.44,.53,-.08,.65,-.18,-.04,.66,.19,-.72,.65,-.21,.06,.03,-.69,.13,-.15,-.64,-.11,-.22,.06,-.05,.66,.22,-.06,.25,.17,-.01,.08,.71,.37,-.06,.18,-.06,-.65,-.1,.77,.06,.03,-.34,.61,.08,.06,.26,-.12,-.06,.33,.65,-.44,.05,.92,-.36,-.43,-.14,-.01,.37,-.22,-.23,.12,.1,-.2,.67,-.11,.51,.67,-.2,-.14,-.02,-.37,.47,-.14,.66,-.08,0,.03,-.28,-.25,.03,-.08,-.15,.73,-.25,.42,.13,.03,.05,.02,.4,.01,-.34,.66,-.21,-.05,-.28,-.34,.44,.11,-.09,.22,-.06,.77,-.02,.03,.05,.78,.24,-.06,.09,.07,-.04,-.23,-.21,-.14,.22,.34,.53,.75,.39,.14,-.11,-.15,.41,.47,.9,-.02,-.47,.27,-.03,-.05,-.04,-.06,-.3,.78,-.09,.86,-.19,.1,-.03,-.13,.13,.06,.22,.15,.19,.71,.34,.91,-.31,.07,.05,.03,-.12,-.12,.67,.63,.36,-.15,.69,.44,-.13,.03,.12,.81,-.27,-.41,.02,-.24,.09,.06,.14,-.04,-.1,-.08,.11,.07,.7,.09,.1,.28,.02,.74,.19,-.23,.23,.69,-.41,.21,-.06,.63,.24,.48,.05,-.31,.85,.68,.7,.06,.3,-.02,.59,.18,-.12,.09,.5,-.44,-.08,.51,.23,.86,-.16,-.01,-.14,.01,.67,-.13,-.14,.39,.45,-.39,-.06,-.06,-.05,.82,.01,-.06,.06,.39,-.09,.37,-.35,.49,.67,-.03,-.08,-.19,.13,-.08,-.14,-.19,.62,.25,.62,-.08,.77,.72,-.14,-.09,.69,-.31,-.02,-.04,-.43,.37,.08,.25,-.12,0,.09,.1,-.04,-.14,.23,.43,-.29,-.03,.89,.69,.15,-.14,.39,-.01,.52,-.53,.03,-.09,-.26,.58,.17,.06,.58,.74,.45,.15,-.15,.04,-.08,-.69,-.03,.9,.07,.14,.24,-.25,.3,-.41,.04,-.04,.29,.57,.09,-.17,.12,.02,.07,.09,0,.23,-.03,.09,.66,.72,.65,.06,.09,.05,.07,.8,-.21,-.18,-.32,.03,-.13,-.21,.64,.31,-.01,.18,.74,.62,.5,.37,.63,-.46,-.39,.64,-.12,.03,.67,.63,-.12,-.26,-.1,.92,.1,.09,.22,.86,.82,.13,-.07,-.45,-.29,-.43,.55,0,-.3,.78,-.17,.7,.81,.38,.44,.63,.57,.01,.18,.16,.8,.67,-.01,-.31,.3,.2,-.83,-.17,-.04,-.28,0,.86,-.26,.48,.66,.6,-.68,-.02,-.12,0,-.35,0,-.49,.71,.15,.88,.35,.09,-.2,.67,.54,.09,.75,.07,.45,.84,.61,.12,.18,-.16,.19,-.44,.36,.53,.06,-.02,-.2,-.35,.65,.85,-.11,.09,.55,-.39,-.09,-.31,.55,.53,.69,-.22,-.32,.53,.76,.1,.62,-.15,.67,-.13,.22,-.06,-.08,-.19,-.07,.62,-.01,.74,-.12,-.09,.15,-.19,.22,.28,.09,.53,-.14,-.16,-.19,-.31,-.23,-.16,-.11,.33,-.56,.15,.1,-.14,.03,.23,.05,-.2,-.17,.24,.6,-.09,.16,.9,.74,.63,.55,-.04,-.26,-.28,-.2,-.06,.68,.05,.03,-.25,0,-.14,-.06,.17,-.04,.1,.57,.65,.27,-.28,.7,.8,-.06,-.27,0,.18,.04,.1,.5,-.14,.24,.81,.82,.42,.06,.85,-.05,.1,.09,.54,-.22,-.82,.59,.73,.08,.08,.55,.78,.7,0,.6,.05,-.16,-.27,.11,-.16,.08,.78,-.15,-.14,-.16,0,.81,-.23,.17,-.1,-.26,-.21,-.12,-.07,-.27,-.21,.23,-.14,.54,-.29,-.08,-.14,-.13,-.1,.24,.26,.67,-.29,-.36,-.07,-.14,.63,-.2,-.03,.26,.64,-.57,.63,.12,.22,-.18,-.76,-.13,.8,.67,0,.69,.07,-.1,.09,.8,.41,.84,-.2,.26,-.03,.16,-.2,.5,.67,.35,-.04,-.07,.06,.15,-.44,.5,.79,-.44,.04,-.07,-.52,.49,.6,-.3,.08,-.5,.72,.71,-.35,-.09,-.29,-.42,-.03,-.24,-.25,.24,.09,.55,-.59,.64,-.07,.2,.77,-.09,.07,-.25,.37,-.16,.01,.72,-.24,.06,.02,-.13,-.08,-.05,.06,-.02,-.2,-.11,.53,.81,.04,.63,.56,-.2,-.13,-.34,.51,-.53,.14,.72,.12,.18,-.25,.9,-.21,.09,-.13,.59,.42,-.29,.2,.02,-.48,.31,.86,-.06,.22,-.25,.01,-.14,.07,.74,.2,-.08,.43,.46,.02,.2,.05,.7,.16,.51,.68,.64,-.13,.09,-.12,-.52,-.35,.74,-.15,-.18,-.42,.03,-.14,.82,-.1,.68,.01,-.01,.68,.62,.41,.09,-.01,-.07,.03,-.19,-.29,.32,.72,.77,0,.8,.55,-.44,.11,-.02,.19,-.15,.63,.56,.38,.29,-.16,-.12,.03,-.07,-.27,.71,-.24,.48,-.24,-.52,.14,.17,.81,-.04,.1,-.26,.77,.04,.89,0,-.02,-.02,-.06,-.18,.91,-.33,-.22,.05,0,.03,.02,.08,-.04,.26,.66,.06,-.35,-.05,.62,.17,.05,.25,.05,-.04,.04,.27,-.03,.04,.05,-.18,-.15,-.07,-.08,.39,.8,-.13,-.27,-.54,-.33,-.22,-.15,-.06,-.34,-.39,.08,-.03,-.18,-.43,-.17,.04,-.01,-.01,-.09,.12,.51,.19,.71,1,0,-.27,.22,.65,-.19,.73,-.5,-.37,.04,.61,.11,-.45,-.11,.46,.84,.06,.03,.01,.13,-.23,.59,.04,-.19,-.06,-.31,-.27,.18,.03,-.24,.48,.13,-.18,-.24,-.41,.08,-.46,.01,-.3,.49,.68,.75,-.17,.82,.66,-.14,-.14,.7,.75,.74,.64,-.71,.02,.03,.33,.76,.02,-.09,-.18,.61,-.11,-.02,-.11,.73,.08,.22,-.22,-.08,-.19,-.14,-.15,.34,.76,-.24,.7,-.09,.71,.06,-.13,-.06,.47,.17,-.1,-.03,-.52,-.13,.23,-.51,.68,-.65,.55,.01,-.14,-.12,-.07,.52,.77,-.36,-.05,-.09,.01,-.21,-.45,-.03,-.08,-.04,.29,-.32,-.12,-.22,-.03,-.33,.08,-.04,.01,.17,-.07,-.04,.1,-.14,.04,.32,-.14,.18,-.06,-.16,.12,.26,-.18,.23,-.39,-.25,.29,-.51,-.56,.06,.66,-.03,.39,.16,.17,-.14,.65,.14,-.02,.11,-.28,-.01,.15,-.05,-.04,.29,.89,-.21,.45,.06,-.23,.82,.04,-.02,-.18,-.2,.01,-.2,-.08,.37,-.27,.45,.23,-.12,.45,-.2,-.34,-.11,-.45,.71,.2,-.16,.1,.73,-.02,-.06,.01,.29,.66,-.03,.05,-.04,.01,.79,-.07,.43,.82,-.27,.39,.8,-.12,-.14,.04,-.03,-.03,.26,.11,-.14,-.07,.55,-.03,-.39,.64,-.16,.51,.43,-.25,-.13,.71,.64,-.36,-.2,-.53,.35,.71,.26,.68,.07,.53,-.08,.05,.05,.07,0,-.06,-.04,-.19,.74,-.09,.8,-.28,.82,-.19,.1,-.19,-.04,-.11,.69,-.24,-.15,-.34,.65,.81,-.08,.03,.77,.68,-.46,-.17,-.45,.76,.04,.19,.26,.64,-.22,.78,.55,.48,.02,.03,-.44,-.06,.54,.28,-.28,-.2,-.25,-.04,-.2,.55,.44,-.22,-.1,.67,.27,.77,.66,.49,.36,-.13,.07,-.58,-.08,.34,.17,.92,.04,.46,.06,-.37,-.1,.07,-.35,-.29,-.06,.85,.92,.07,.63,-.12,-.28,-.56,.01,.75,-.05,-.25,.58,.58,-.42,.05,.26,-.17,.72,-.09,.51,-.5,.63,.51,-.28,.69,.01,-.07,-.34,.64,-.24,-.08,.64,.54,-.22,-.25,.66,.31,-.22,-.19,-.13,.03,.15,-.19,-.21,.16,-.39,.61,.07,.74,.5,.59,-.05,-.13,-.21,.91,.78,.67,-.1,-.2,-.07,-.06,.15,.58,-.16,.65,-.19,-.19,-.19,.07,.01,.16,-.12,-.34,.47,-.71,.76,-.01,-.34,.22,.01,.02,.05,.07,-.12,.73,-.05,.55,.28,.01,-.36,.31,-.43,-.25,-.1,.36,-.3,.46,-.21,.2,-.13,.8,.2,-.04,-.03,-.14,.65,.7,.33,-.42,-.2,-.14,.52,.5,.37,.71,.27,.05,.18,.14,.83,-.02,-.46,.9,.05,.17,.79,-.76,.2,-.2,.01,.01,.45,.9,-.11,.01,-.29,-.09,-.22,-.21,-.22,.69,.68,.4,.12,.06,.7,-.43,.22,-.15,.18,-.52,.02,.01,.54,.25,-.09,-.16,.63,.12,.05,.27,.25,-.11,-.19,-.01,-.07,.31,.4,.11,-.02,-.08,.03,-.32,-.19,.28,.46,.06,-.24,-.47,-.19,.48,-.06,-.11,-.25,-.49,-.03,.04,.65,.02,-.19,-.36,-.42,.12,-.4,.03,-.28,-.23,0,-.13,.32,.36,.07,.23,.54,-.17,.27,-.08,.1,.9,.3,-.38,.08,.77,-.21,-.23,-.12,.3,.68,.37,.79,-.05,.07,-.14,-.27,.62,.68,-.08,-.22,-.14,.88,-.08,.02,.13,-.07,.36,.01,.01,0,.05,.15,.68,0,.1,.82,-.07,-.04,.66,-.02,.75,.66,-.07,-.38,.08,.11,.05,.72,-.37,.69,-.15,-.35,.05,-.18,.09,.25,-.46,-.22,.16,.6,.79,.6,.56,-.17,.02,.06,-.04,-.16,.24,-.06,.1,.53,.17,-.1,.27,.24,-.21,-.16,-.49,.04,.48,-.2,.44,.27,.17,-.1,-.21,.32,-.11,.29,-.29,.5,.05,-.13,-.06,.06,-.43,.58,.09,.02,-.13,.32,.08,.04,.05,.43,.05,.05,.77,-.1,-.33,.19,.82,.09,-.07,.47,.55,.32,.2,.12,-.08,.21,.75,-.24,.33,.59,-.2,-.12,.18,.16,.17,.2,.75,-.24,.18,.02,-.45,.47,-.02,.22,.48,.04,-.15,.56,.23,.79,.7,-.21,.63,.54,.63,.26,-.33,-.1,.52,.14,.52,-.01,.53,.57,-.15,-.13,.56,.44,.56,.5,.1,-.17,.56,.46,.09,-.13,.54,.27,.78,.05,.64,.65,.47,.59,-.17,.55,-.18,0,.29,.8,-.34,-.04,.61,.43,.45,.06,.11,.58,.67,.78,.71,-.06,.03,-.04,.21,-.17,.77,-.07,.14,.72,.2,.26,.28,.01,.72,.68,-.11,-.04,.64,.08,.21,.66,-.18,.05,.51,.19,.04,.46,.1,.58,.07,.64,-.15,.17,.11,-.09,-.01,.1,.07,.23,.69,.1,.36,.12,.13,-.05,0,.6,.53,.48,.53,.68,-.41,.07,-.13,.06,.21,.07,-.11,.53,.44,.64,-.28,.57,-.42,.03,.18,-.17,.26,-.33,.22,.83,.78,.63,.7,-.01,.69,.15,.37,.2,-.56,.28,.3,-.44,.48,-.02,.5,.07,.64,.43,.05,.73,-.16,.02,.4,.08,.1,.56,.02,-.25,.07,.06,-.1,.04,.07,.71,.78,.72,-.35,.57,.67,.68,.67,.57,.82,.09,-.33,-.25,.55,.04,-.29,-.18,.18,.23,.06,.8,.63,.58,-.17,.78,.27,.01,.32,.23,.61,.49,.28,-.41,.1,.08,-.09,-.2,-.01,.66,.51,.41,-.34,.24,.12,.7,-.2,.03,-.19,.15,.64,-.11,.69,.54,.71,.68,.05,.39,.49,.64,.14,.27,-.07,.4,-.53,-.09,-.09,-.59,.02,-.44,.02,-.12,-.22,.03,.34,.35,-.13,.83,.8,-.28,.63,-.39,.04,-.3,.08,.7,.81,.8,.39,.37,.33,.27,.29,.25,.4,-.02,.72,.78,.48,.26,.14,.22,-.03,.36,.7,.62,-.24,.16,.15,-.18,.75,-.03,.17,-.15,.35,.84,.57,.62,.83,.86,.57,.04,.4,-.12,-.15,.62,-.28,-.07,-.25,.57,.82,.45,.08,-.1,.35,.02,.65,.23,-.17,.04,-.1,-.19,-.23,.69,-.47,.02,-.23,.69,-.11,.65,-.22,-.25,.11,.03,-.09,-.27,.88,-.03,-.28,.33,-.09,.14,.63,-.32,-.52,-.17,.11,.6,-.11,-.28,.43,.14,.27,-.16,.8,-.23,.66,.03,.89,-.07,.04,-.03,-.01,.41,.08,.18,-.05,-.74,-.12,-.19,.42,.52,.61,.39,-.26,.21,.58,.01,.23,-.09,-.01,-.21,.67,.75,.04,.43,.74,.33,.06,-.1,.68,.8,.14,-.29,.04,.14,.23,.19,-.21,.52,.41,0,-.07,.82,-.15,.13,.66,-.31,.01,.41,-.09,-.03,-.13,.65,-.4,.75,-.24,.12,-.25,-.04,.68,.29,-.29,-.07,-.14,-.17,.86,.8,.59,.17,.64,.81,.81,.59,.72,.06,-.03,.2,.76,-.22,.27,.02,-.08,.04,.82,.66,-.34,.7,-.13,.25,.74,.21,.07,-.13,-.06,-.26,-.33,.08,.14,.45,.77,.49,.74,.21,.11,.22,.22,.43,.03,-.02,.23,.58,.86,-.09,.02,-.66,-.02,.76,.21,.64,.02,.8,-.08,-.03,.53,-.71,.77,.65,.82,.11,.51,.06,.55,.57,-.11,.48,.66,.65,.33,.86,.78,.81,.1,.88,.43,0,-.03,.86,.78,.76,.85,.79,-.36,.54,.77,.06,-.58,.86,-.2,.8,-.45,.02,.48,.23,.82,.65,.01,.02,.18,-.33,.7,-.11,.51,.36,.58,-.39,.12,-.04,-.04,.14,-.01,.39,.07,.02,.78,-.18,.1,.27];export{a as rvalData};
