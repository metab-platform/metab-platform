const a=[0,.03,0,.68,0,.13,.32,.05,0,.54,0,.3,.47,0,0,.07,.28,.43,.19,.22,.35,.62,.8,0,0,0,.86,.76,.7,.3,.01,.77,0,.01,.02,.74,0,0,.14,0,.86,0,.03,.22,.04,0,.25,.09,.94,.17,.14,.06,.01,0,.1,0,0,.03,.07,0,.32,0,0,.12,.77,.9,0,0,.22,.66,.99,.01,.58,.09,0,.89,.72,.66,0,.34,0,0,.99,0,.02,.43,0,.44,0,0,.13,.2,.18,0,.81,.84,0,.06,.01,.52,.71,0,.01,.23,0,.11,.68,.15,0,0,.72,.28,.91,0,.7,0,.26,.36,.09,0,.15,.5,.31,.35,.24,0,0,.01,.28,0,.11,.06,.68,.55,.01,.17,.09,.01,.95,.01,0,.07,0,0,.04,.39,.09,0,0,.86,0,.87,.49,.09,.06,.13,.13,.09,.15,0,.15,0,.19,.35,.2,.9,.07,.29,.29,0,.02,.19,.03,0,0,.43,.43,.1,.86,0,.31,.23,.94,0,0,.37,.68,.71,.17,0,.02,.81,.02,0,0,0,0,0,.35,.23,0,0,0,.82,0,.01,.23,.19,.21,.79,.04,0,.41,0,.05,.74,.54,.31,.65,.99,0,.03,.01,0,0,0,.11,.89,.1,.91,.8,.71,0,0,0,.07,0,0,.2,.99,.77,0,.02,0,.88,.06,.33,.26,.93,.42,.89,.39,.13,.48,0,.21,.28,0,.8,0,.55,.02,0,0,0,0,.05,0,.51,.02,.92,0,0,0,0,.74,.06,.76,0,.95,.48,.73,0,0,.17,0,.18,0,.51,.62,.8,.42,0,.1,.36,.01,.06,.04,.44,.04,.33,0,.89,.58,.99,.08,.04,0,.05,.02,0,.83,.92,.04,.07,.05,.03,.13,0,0,0,.25,0,0,.91,.33,0,.02,.17,.1,0,0,.73,.61,.2,.71,.25,.04,.21,.54,.11,.01,0,.29,0,0,.09,.78,.03,.71,0,0,.49,.23,0,0,.16,.89,0,0,.01,.11,.61,.15,.73,0,.29,0,.47,.81,.11,.04,0,.11,.82,.87,.72,0,.54,.53,.94,.94,.61,.81,.68,.11,.73,.38,0,0,0,.52,.97,.7,.82,0,.04,.44,.01,.68,.05,.43,0,0,.61,.05,0,0,0,0,0,0,0,0,.28,.79,0,0,.43,.1,.43,0,.27,.08,.18,0,0,.28,.63,0,.07,.14,0,.93,.35,0,.13,0,0,0,0,0,0,.09,.08,.06,0,0,.34,0,0,.03,0,.45,.55,.14,.55,0,.05,0,0,0,0,.76,.78,.01,0,.55,0,0,.08,0,.02,.44,.38,0,0,.14,0,.94,0,0,0,.06,.23,.75,0,0,.21,0,.31,.44,.44,0,0,0,.43,.85,0,0,.85,.03,0,0,0,.21,0,0,0,.97,0,.8,0,.15,.16,.34,.14,.52,.58,0,.26,0,.25,.89,.49,.04,.18,.34,.05,0,.33,.45,.08,.04,.01,.1,.36,0,0,.57,.04,.48,.35,.05,.24,0,.08,.01,0,.14,.24,0,0,0,.03,.47,.04,0,.15,.25,0,.91,.97,.32,.33,.3,.84,.37,.2,.79,0,0,.01,0,0,0,.77,.21,.62,.36,.15,.82,0,.94,0,0,0,0,.19,0,.71,.12,.01,0,.4,0,0,0,.91,.7,0,0,0,.7,0,.56,.06,.02,.74,.08,.52,0,.51,.8,.54,.87,0,.05,.21,.07,.34,.01,.2,.35,.63,.01,.72,.52,0,.04,.93,.03,.21,.73,0,0,0,.02,.24,.62,.9,0,.05,.8,.06,0,0,0,0,0,.03,0,.37,0,0,.95,0,.81,.39,.65,0,.01,0,.1,.01,.93,.59,.93,0,0,0,.53,.5,.3,.17,0,0,0,0,.77,.88,0,.02,0,.02,.81,0,0,0,.13,.1,0,.01,.82,.01,.87,.14,.25,0,0,0,.8,.03,0,.78,.73,0,0,.12,.44,0,.01,.41,.13,.22,.2,.58,.7,.85,.35,.83,0,0,.67,0,0,.41,.48,0,0,0,.25,0,.24,.01,.12,0,.19,.25,.41,0,0,.49,.08,.97,0,0,0,.67,.15,.01,.12,.05,.1,0,.08,.07,.04,0,.84,.08,.88,0,0,.01,0,0,.69,.99,.06,0,.04,0,.07,.46,0,.01,.2,0,.35,0,.51,.38,0,0,0,.06,.86,.13,.15,.1,.07,0,0,0,.46,0,.01,0,.02,.91,.31,.27,0,0,0,.04,.09,.12,.37,.4,.02,0,.14,0,.04,0,.34,.68,0,.11,.89,.27,0,.97,0,.65,.57,.03,.75,.47,0,.3,.14,.57,.97,.2,.03,.56,.95,0,0,.65,.01,.72,0,.08,.88,.07,.44,.35,.7,0,.59,.8,.12,.12,.13,.25,.57,0,0,.11,.11,0,0,.01,.2,.01,.01,0,.66,.74,.48,.01,.1,.98,.84,.64,.05,.61,0,.52,0,0,.77,.41,.02,0,.02,0,0,.01,.04,0,.46,0,.1,0,0,0,.45,.86,.99,.02,0,.11,.46,.21,.12,0,.12,.99,.01,0,.58,.42,.15,.01,.48,0,.82,.01,0,0,0,.04,0,0,.11,.79,0,0,0,0,0,.47,.72,0,0,.41,.11,.19,0,.03,.66,.37,0,.44,.52,.08,.64,.85,.16,.24,.61,0,.1,0,.13,0,.02,0,.5,0,.73,.22,.29,0,.82,.17,0,0,0,0,.67,.11,.15,.66,0,0,.02,.24,.51,.17,.29,0,.24,.26,.07,.03,.03,.77,.07,.7,.05,.95,.88,.45,0,.18,.11,.98,.08,.33,.01,.05,.27,.32,.14,.52,.06,.65,.16,.21,0,.06,0,0,.84,0,.52,.07,.07,.56,.85,0,.8,.48,.6,.08,.44,.18,.16,.73,.05,0,.16,.01,.26,.35,0,.24,.04,.63,.38,.38,.15,.36,0,.52,0,.26,.05,0,.78,.04,.11,.01,0,.22,.06,.55,0,.51,.56,.34,0,0,.46,.45,.45,.99,0,.45,0,0,.27,.08,0,.2,.8,.73,.64,.84,.47,.79,.22,.91,0,.66,0,0,.88,0,0,.28,.57,0,0,.1,.1,0,.08,0,0,0,.15,0,.61,.32,.47,.22,.48,.2,.87,0,0,.95,0,.03,0,.04,.2,.32,.45,.87,0,.04,.74,0,0,0,.38,.83,0,0,.01,.03,.02,0,.58,.4,.47,0,.02,0,0,0,.1,.52,0,.27,0,.01,.56,.04,.43,.15,.03,0,0,.02,.81,0,.58,0,0,0,.2,.25,.96,0,.14,0,.35,0,.87,0,.9,0,.82,.45,.09,0,.53,0,0,.07,0,.29,.47,0,.01,0,.11,.02,0,0,0,.18,0,.18,0,.4,0,.02,0,0,.2,0,.24,.56,0,0,.96,.03,0,0,.07,.03,0,0,.02,.06,.11,.93,.81,.2,.02,.99,.01,0,.13,0,0,0,.73,.22,.03,0,0,0,.24,.04,.14,.15,.16,0,.05,0,.92,.04,.04,.21,.66,0,.3,.01,0,0,0,.27,.12,.08,.04,.94,.84,.52,.08,0,.85,0,.03,.01,.04,0,0,.01,.62,0,.06,0,.37,.56,.01,0,.06,.9,.19,.74,0,0,.01,.01,.86,.16,0,.02,0,0,0,.13,.04,.57,0,.5,0,0,.35,0,0,0,.02,.7,.51,.98,0,0,.04,.33,.38,.55,.01,.73,.98,0,0,0,.98,.76,0,.01,.63,.09,.16,0,.36,.51,0,.11,.5,.19,0,0,.19,.08,0,.14,0,.16,0,0,0,.03,0,.61,.15,.61,.24,0,0,.14,.46,.01,.42,0,.34,.32,.52,.01,0,0,0,.06,.51,.12,.01,.1,.07,.51,.46,.85,.47,.37,0,0,.62,0,0,.91,0,.46,.04,0,0,0,.21,0,.05,.26,.03,.23,0,0,0,.97,.37,0,0,0,0,.47,.65,0,0,.73,.59,.09,.78,0,.55,.52,.65,.07,.48,0,.28,.61,0,.26,.51,0,.68,0,0,0,0,.33,.24,.99,0,0,0,.37,.95,.32,.38,.62,0,0,0,.3,0,0,0,0,.41,.49,.34,.74,.97,.05,.99,.01,0,.2,0,0,0,.49,.07,.02,.63,0,.07,0,0,.01,.71,.69,0,.38,0,.9,0,.16,.1,.92,.16,.03,0,.04,.31,.64,.78,.39,.81,.82,0,.22,.87,0,.94,0,0,0,.08,.17,.02,0,.08,.49,.03,.67,.07,0,.13,0,0,.05,.4,.06,.16,.16,.85,0,.01,.7,.61,0,0,.01,.01,0,.85,.33,0,.06,0,0,.26,0,0,0,.04,.14,.86,.01,.03,0,.4,0,0,.04,.3,0,0,0,.03,.24,.26,0,.04,.01,.39,0,.1,0,.58,0,0,0,0,.03,0,.35,.24,0,0,0,.73,0,0,0,.86,.02,.4,0,0,0,.99,.8,.19,.8,.07,0,.71,.35,0,.85,.06,.01,0,0,0,.14,.23,0,.14,.14,0,.47,.86,0,0,.4,0,0,0,.89,0,.14,0,.9,.12,.64,.58,.37,.17,0,.12,0,.74,0,.4,.52,0,0,0,0,0,.01,.27,.09,.23,0,.99,.04,0,0,0,0,0,0,.82,0,.57,0,.49,.01,0,0,0,0,.14,0,0,0,0,0,0,.09,0,0,.95,0,.08,0,0,.77,0,.28,.61,0,.07,.39,0,.4,.4,.78,.16,.36,.38,.52,0,0,0,.06,0,0,0,0,0,0,.86,.06,0,0,.81,.01,.73,.32,.07,.07,0,0,0,.08,0,0,.14,0,.03,0,0,.06,0,.04,.71,.04,.11,.82,0,.02,0,.07,.09,.1,0,.02,.87,.11,.77,0,.38,0,.02,0,0,.11,0,0,0,.58,.29,.7,0,0,.42,.12,0,.51,0,.4,.93,.32,.69,0,0,.88,0,0,0,0,.11,.97,0,.96,0,0,0,.04,.24,0,0,0,0,.46,.04,0,0,0,.12,0,.24,.1,0,0,0,.03,.45,.08,.42,0,.1,.01,.99,0,0,0,0,0,0,0,.92,0,.72,.24,0,.2,.23,.08,0,0,0,.07,.45,0,.52,0,0,.3,.83,.66,.03,.02,0,0,.13,.95,0,.52,.03,.88,.01,.12,.88,.1,0,0,.41,.21,0,.39,.45,0,.24,0,.56,.06,0,.25,.03,0,.02,0,.49,0,.04,0,.8,0,.07,.11,.27,.99,0,.28,.76,.41,0,.2,0,0,0,0,0,0,.73,.01,.05,.95,.12,.37,.64,0,0,.9,0,0,.08,.54,.2,0,0,.85,.01,0,.02,0,.3,.24,.01,.26,.14,.47,0,.69,.03,0,.58,.36,0,.95,.42,.99,0,0,0,.03,.51,0,.03,0,.23,.01,.98,.24,.44,0,0,0,.83,0,0,0,0,0,.38,.58,.02,0,.52,.03,.83,.09,.76,0,0,0,0,.15,0,0,.18,.47,.07,.46,.01,.01,.85,.55,0,0,0,0,.04,.28,.02,0,0,0,.5,0,0,0,.94,.69,0,.1,0,.1,0,.85,0,.63,.29,0,0,0,0,0,.95,0,.1,0,.03,.55,.13,0,0,0,0,0,0,.26,0,0,.62,.23,0,0,0,0,0,.05,0,0,.4,0,0,.05,0,.03,.97,0,0,0,0,.81,.37,.2,.01,0,.92,0,0,0,0,.88,.64,.5,.76,.28,0,0,.86,0,.02,.19,0];export{a as pvalData};
