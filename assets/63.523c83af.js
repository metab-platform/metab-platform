const a=[-.35,.4,.73,-.07,.8,.06,.3,.03,.3,.21,.26,-.08,-.04,-.74,.47,.02,.27,-.01,-.21,.01,-.04,-.47,.18,.33,.52,.86,-.41,.13,.42,-.37,.54,-.44,.68,.14,-.07,.25,.71,.45,.39,.57,-.05,.84,.53,-.08,.14,.23,-.01,-.27,-.23,.45,.27,-.02,.28,.9,.52,.38,.26,.21,.43,.65,.51,.71,1,-.09,-.01,-.42,.88,.41,-.07,-.01,.04,.43,.51,-.27,.84,-.01,-.16,.46,.56,-.26,-.47,.58,-.07,.82,-.27,-.45,.76,-.01,-.77,.63,.3,.09,.38,-.65,-.08,0,-.74,-.25,-.22,.57,-.14,.95,.62,-.16,.75,.06,-.01,.08,.73,.71,.06,.43,.11,-.61,-.28,.7,.15,-.48,-.43,.56,-.01,-.25,.24,-.16,.03,.68,.73,-.31,-.38,.73,.07,-.39,-.08,.31,.24,-.08,.19,.37,-.38,-.04,.87,.11,.83,.77,.06,-.08,.03,-.06,.82,-.22,.93,.11,.1,.02,.1,.18,.01,-.07,-.25,.43,.02,.82,.03,.31,.39,.39,.37,-.48,.08,.76,0,-.41,.09,-.28,.61,-.35,0,-.23,.42,.75,-.03,.06,.02,.58,.63,.05,.06,.14,.23,-.3,-.08,.26,.01,.76,.8,.74,.79,.41,-.01,-.5,.41,.62,.76,.02,-.55,.55,0,.5,.45,-.05,.06,.47,-.14,.65,.19,.41,.07,.19,-.38,-.28,.7,.57,.48,.86,.57,.78,.14,-.41,.33,.13,-.04,-.12,.52,.71,.16,.07,.39,.08,.09,.07,.41,.5,-.01,.01,.3,-.07,.14,.2,.12,-.05,.14,-.34,.52,.03,.85,-.11,.12,.42,.16,.63,.16,.16,.51,.85,.02,.69,-.28,.8,-.07,.61,-.19,-.43,.71,.77,.68,-.03,-.14,.43,.8,-.25,.29,-.32,.46,-.46,.39,.6,-.23,.65,.32,-.31,-.15,.41,.72,-.06,.26,.54,.13,-.32,.21,.5,.06,.69,-.4,-.07,.08,.41,-.04,.78,.2,.11,.78,-.06,-.13,.04,.17,.5,.43,.25,.76,.39,.84,-.17,.43,.9,.18,.43,.76,-.15,-.05,.46,-.66,.63,.15,.05,-.47,.02,-.41,.54,-.24,-.38,.66,.49,-.18,-.03,.76,.74,.12,.4,.47,.26,.92,-.09,.13,.39,-.41,.52,.31,-.03,.8,.64,.46,.22,.32,.01,-.14,-.53,.18,.78,.39,.09,-.05,-.25,.32,.03,.34,.31,.16,.79,-.05,.37,.04,.05,.04,.22,-.02,.32,-.15,-.03,.69,.72,.81,-.02,.08,-.04,-.12,.72,-.63,-.09,-.12,.04,-.26,.16,.76,.55,.25,.06,.48,.76,.86,.71,.77,-.58,-.38,.83,.08,.03,.88,.57,.3,-.43,.13,.71,-.32,.05,.26,.78,.65,0,.32,-.31,-.04,-.01,.54,.09,.29,.82,-.22,.82,.84,.68,.82,.74,.79,0,.45,.53,.68,.75,.07,-.6,.36,.63,-.83,.08,-.12,-.05,-.36,.78,.15,.48,.88,.77,-.65,.44,.03,.06,-.29,-.22,-.67,.88,.12,.74,.46,.03,.36,.7,.66,.23,.73,-.4,.84,.63,.68,.43,.4,.14,.51,-.22,.24,.62,.06,-.09,-.01,-.21,.77,.78,.22,-.1,.48,-.05,.37,-.02,.71,.58,.87,-.17,.03,.67,.66,.48,.86,.05,.83,.12,.42,-.37,.12,.28,.4,.81,-.17,.75,-.02,-.06,.53,-.03,.2,.3,.2,.66,.35,.21,-.09,.08,0,.18,.36,.26,-.15,.03,.11,.32,-.12,-.11,-.37,-.27,.1,-.08,.78,.22,-.25,.77,.81,.67,.65,-.11,-.55,-.1,-.29,-.09,.77,-.32,.27,.05,-.04,-.08,-.07,-.01,.17,-.14,.7,.76,.23,-.3,.73,.76,-.13,-.62,.35,.22,-.39,.13,.87,.24,.73,.53,.72,.79,-.35,.69,-.07,.1,.04,.76,.04,-.66,.7,.74,.46,.15,.48,.86,.72,.32,.51,-.42,.16,-.37,.15,.17,.12,.62,.13,.26,-.05,0,.73,-.07,-.07,0,.1,-.11,.34,-.09,.17,-.3,.26,.21,.86,-.13,-.05,-.56,-.4,.39,.32,.6,.7,.09,-.02,-.41,.25,.72,-.62,.07,.29,.83,-.15,.89,.05,.72,-.16,-.81,.16,.81,.71,.06,.43,-.12,-.18,-.01,.7,.56,.78,.28,.24,.12,.13,.21,.74,.77,.59,-.04,-.13,-.37,.52,-.16,.83,.85,-.53,.15,.01,-.11,.4,.75,.13,.31,-.49,.86,.82,-.15,-.07,-.28,.01,-.14,.03,-.09,.28,.14,.73,-.56,.81,.15,.54,.62,.01,-.08,-.18,.45,-.06,-.35,.84,-.1,.24,.1,-.1,-.11,.14,.08,-.18,-.16,.13,.78,.68,-.02,.65,.43,-.38,-.54,-.29,.78,-.63,.32,.72,.02,.57,.18,.69,-.13,.1,.03,.32,.49,-.49,-.17,0,-.39,.49,.64,.08,.64,-.15,-.18,-.26,.31,.73,.11,-.1,.21,.6,-.05,.33,-.44,.74,.44,.27,.74,.86,-.11,-.24,.15,-.06,.21,.77,.08,.38,-.36,.43,.04,.74,.42,.72,-.26,-.06,.88,.69,.78,.51,.35,-.09,-.41,-.57,.06,.71,.37,.84,-.42,.81,.79,-.37,.54,.03,.37,-.43,.9,.56,.65,.35,-.47,.29,-.04,.02,-.17,.71,-.51,.65,.1,-.6,-.33,.05,.75,-.01,.21,.02,.62,.02,.78,-.19,.26,-.25,-.07,-.01,.74,.24,-.22,-.03,-.21,0,.21,.23,-.47,.57,.67,-.04,.03,-.36,.87,.15,-.43,.66,-.1,-.09,-.39,.58,-.09,-.05,.23,.27,.21,.34,-.24,.78,.84,-.11,-.35,-.06,.04,-.45,.08,.1,-.08,-.33,.02,.08,.38,.09,.25,.34,.2,-.16,.12,-.36,.59,.01,.9,.62,.08,.34,.36,.81,0,.89,-.5,-.51,.59,.71,0,-.42,-.17,.54,.78,.23,-.23,.01,-.08,-.03,.57,.15,.25,.03,.16,0,-.17,-.35,-.23,.8,.23,.01,.05,-.08,-.05,.07,-.08,-.34,.54,.81,.78,.08,.76,.7,.31,.26,.67,.59,.82,.73,-.75,.47,-.13,.66,.84,-.08,.08,.2,.64,-.01,.13,.06,.66,.03,.05,-.01,-.01,.12,-.11,.2,.22,.87,-.02,.82,.03,.72,.15,-.02,-.08,.72,.1,.02,0,-.64,-.08,-.15,-.22,.35,-.75,.8,.02,.17,.31,.34,.66,.92,.01,-.57,.21,.16,.01,-.21,.08,.01,.52,.61,-.06,.36,-.02,-.05,.27,0,.03,.1,.15,-.05,-.07,.08,-.05,.03,-.01,-.15,.07,-.14,-.04,-.17,.61,.3,-.19,.1,-.17,.42,-.26,-.13,.1,.83,.04,.36,.52,.18,.27,.79,-.03,.17,-.14,.08,-.06,.18,.39,.04,.67,.67,-.01,.34,.01,-.05,.75,-.22,-.13,-.02,.35,-.03,-.19,-.26,.61,.3,.6,.27,.13,.25,-.14,-.3,.09,.13,.71,-.25,-.09,-.03,.58,.4,.35,-.46,.52,.64,-.06,.3,.34,.49,.66,-.14,.49,.75,-.01,.65,.88,.1,-.4,.12,0,.42,-.07,.19,-.26,-.46,.74,.21,-.31,.84,-.44,.6,.92,.02,.2,.85,.75,-.19,-.37,-.1,.38,.64,.43,.49,.09,.7,-.04,-.17,.49,.49,.02,-.4,-.26,-.24,.56,.3,.77,-.35,.53,-.26,.19,-.36,0,0,.45,.25,-.08,0,.78,.85,-.23,.06,.76,.82,.04,.13,-.17,.82,-.2,-.06,.29,.87,.05,.7,.26,.62,-.19,.13,-.34,.41,.74,.06,.32,.04,.16,.13,0,.48,.41,-.12,.34,.65,.15,.88,.75,.86,.53,.17,.03,-.59,.4,.75,.18,.66,.09,.54,.03,0,-.19,.01,.06,-.36,.15,.81,.67,.02,.69,.24,-.22,-.41,.02,.83,-.08,-.25,.9,.85,-.43,-.38,.62,-.04,.9,.37,.89,-.11,.73,.59,.15,.78,.04,-.19,-.17,.49,.3,-.1,.84,.68,.08,-.11,.76,.45,.05,.09,.33,-.05,-.36,.34,.2,-.37,-.15,.9,.13,.74,.65,.64,.05,-.05,.04,.65,.83,.76,-.08,.07,-.16,-.11,.27,.68,.04,.9,-.14,-.03,.25,0,.06,.69,-.38,-.07,.84,-.71,.7,.07,-.11,-.11,.51,-.47,-.46,.45,-.02,.86,-.01,.88,.15,.45,-.09,.55,-.35,-.13,-.06,.8,.01,.56,.26,.14,-.06,.71,.08,.02,.08,.03,.75,.9,.76,-.14,.32,-.1,.8,.56,.81,.72,.52,.05,.15,.06,.49,.39,-.01,.78,-.16,.58,.65,-.76,.37,-.05,.11,.3,.49,.71,.11,.39,.02,-.28,-.33,.17,.02,.61,.89,.66,-.38,-.02,.81,-.19,.41,.16,-.05,-.15,-.05,.02,.82,.35,-.24,-.17,.3,.26,.1,0,.77,-.07,-.19,.51,.4,.71,.61,.15,.42,.31,.5,0,.26,.58,.74,-.08,-.12,-.21,.06,.82,.43,.1,-.12,-.5,.09,.24,.62,.4,-.28,-.35,-.33,.28,-.42,-.09,-.27,-.1,-.03,.1,.35,.24,-.03,.72,.86,.18,.62,.39,.68,.72,.03,.02,.16,.71,-.37,.19,-.13,.01,.74,.64,.42,.19,.44,-.51,-.15,.75,.76,.25,.12,-.04,.64,.12,-.22,.24,0,.3,.01,-.16,.25,-.19,.12,.64,-.14,-.18,.66,-.14,.14,.94,.44,.79,.77,-.04,-.23,.42,.06,.5,.54,-.22,.83,.1,.06,-.07,-.27,.1,.43,-.4,-.29,.16,.55,.91,.69,.63,.2,-.14,-.01,-.14,.21,.2,-.31,.54,.85,.32,-.14,.27,.49,.39,-.27,-.41,-.35,.81,-.31,.84,.63,.65,-.02,.2,.59,.02,.53,.03,.64,.59,-.05,.03,.6,-.2,.73,.48,.3,.02,.54,.09,-.03,.16,.58,-.13,.12,.86,.44,-.32,.6,.83,.48,.13,.36,.66,.35,-.12,.55,-.04,.12,.8,-.16,.59,.37,.26,.42,.48,.41,-.02,.24,.79,-.04,.18,-.47,.05,.65,.45,.43,.86,-.06,.32,.66,.71,.72,.77,.35,.81,.89,.72,.41,-.02,.35,.63,.11,.74,.08,.9,.86,.04,.38,.82,.43,.74,.64,.17,-.12,.74,.58,.55,.26,.58,.49,.43,.01,.78,.8,.51,.85,.09,.66,.32,-.45,.78,.47,-.22,.06,.82,.55,.78,.41,.47,.33,.74,.66,.94,-.28,-.29,.35,.23,.13,.62,.36,.26,.55,-.17,.5,.5,.44,.86,.77,-.14,-.13,.64,.41,.55,.7,-.05,.08,.68,.49,.53,.87,.53,.89,.12,.92,-.19,.67,.04,.29,-.01,.08,.15,.45,.71,.16,.64,.12,.65,-.09,.3,.87,.71,.81,.74,.86,.11,.15,-.03,.4,.43,-.02,-.25,.84,.78,.79,.08,.76,.07,-.07,.61,.23,.78,.13,.18,.71,.7,.75,.7,.05,.66,.59,.83,.5,-.37,.82,.23,-.3,.87,-.09,.79,-.03,.74,.8,0,.85,-.15,.18,.22,.44,.26,.35,.39,.03,-.04,.41,.11,-.22,.01,.75,.75,.42,.01,.79,.36,.41,.78,.79,.76,.01,-.04,.02,.81,-.07,-.47,-.11,.42,.45,.34,.75,.76,.37,-.19,.69,.68,-.35,.52,-.06,.81,.64,.36,-.31,-.26,-.02,-.18,.21,.34,.74,.63,.56,-.1,.5,.47,.81,.02,.12,-.21,.01,.86,-.22,.69,.48,.66,.65,.1,.75,.39,.92,-.36,.17,-.04,.46,-.52,-.17,.13,-.66,-.08,-.15,-.04,-.03,-.17,-.01,.69,.74,-.02,.74,.72,-.3,.72,-.22,-.44,-.61,.01,.83,.75,.88,.49,-.01,.57,.39,.57,.67,.54,.24,.85,.69,.66,.64,.55,.38,-.08,.75,.78,.85,.22,-.37,.14,.1,.8,.09,.66,.09,.62,.72,.88,.68,.74,.75,.82,0,.72,.1,-.25,.71,.21,-.16,.16,.68,.66,.83,.48,.34,.54,.48,.71,.24,-.04,.15,.04,.07,0,.42,-.34,.14,-.05,.82,-.08,.51,-.26,0,.09,.03,-.25,-.31,.76,-.03,.24,.5,.35,.42,.85,-.28,-.44,-.33,.05,.77,-.09,.08,.74,.67,.41,-.05,.85,-.03,.87,-.01,.77,.19,.58,.56,0,.35,.17,.19,0,-.56,-.34,-.21,.88,.89,.75,.5,-.2,-.12,.76,.57,.46,.15,-.05,-.1,.87,.66,.07,.58,.84,.36,.44,.29,.85,.88,-.36,-.01,.46,.62,.62,.12,-.32,.49,.03,-.13,-.12,.73,-.2,.04,.78,.27,.03,.82,.11,.03,-.14,.95,-.47,.47,.25,0,-.16,.11,.59,.21,-.06,.03,.38,.02,.73,.84,.67,-.32,.67,.73,.78,.8,.8,.07,.18,.55,.85,.2,-.04,-.01,-.14,.21,.89,.79,-.25,.65,-.07,.37,.68,.18,.37,.04,.11,-.48,-.16,.09,.11,.74,.74,.68,.8,.56,.06,.57,.24,.06,.11,-.11,.06,.77,.7,.28,-.31,-.72,.46,.65,.23,.85,.44,.85,.45,.06,.74,-.68,.83,.82,.83,.17,.93,.15,.81,.58,.21,.42,.67,.77,.56,.75,.87,.67,-.3,.75,.22,.57,-.14,.74,.84,.84,.75,.87,-.19,.84,.57,.22,-.6,.76,.07,.71,-.36,-.01,.83,.54,.87,.93,-.24,.08,-.22,.06,.82,.17,.62,.59,.84,-.11,-.4,.1,-.23,-.27,.11,.5,.01,-.01,.75,.08,.15,.68];export{a as rvalData};
