const a=[0,.33,.38,.34,1,0,.83,.61,.09,.82,.86,0,0,.3,.5,.06,.05,.29,0,.03,.41,.1,.51,.48,.62,.47,.04,.42,.28,.05,.68,.02,.6,0,.02,.12,.04,.57,.41,.42,.66,.76,.12,0,0,.37,.88,0,.25,.01,.99,0,.01,.89,.19,.95,.7,0,.32,.36,.38,.43,.51,.75,.43,.02,.82,.71,.18,.97,.83,.04,.57,.28,.7,0,.09,.53,.35,.01,.37,.4,.98,.56,.03,.54,.31,.14,.99,.29,.11,.11,.06,.17,0,0,.26,0,.09,.79,.42,.82,.48,.25,.2,0,.31,.01,.48,.36,.22,.69,.27,.04,0,.8,.67,.01,.17,.35,0,.88,0,.65,.54,.08,.53,.07,.02,.77,.37,.26,.7,.64,0,.05,.69,0,0,0,.89,0,.15,.56,0,.05,.41,.02,.57,.98,.99,.67,.6,0,.52,.16,.3,0,.03,.77,.76,.59,0,.02,.07,.48,.74,0,.37,.17,0,.1,.7,.54,.02,.13,.59,.4,.6,.5,.2,.03,.23,.98,.17,0,0,0,.89,0,.24,.92,.04,.76,.65,.27,.44,.01,0,.01,.66,.49,.82,0,.31,.27,.23,.21,.59,0,.37,.54,0,.64,0,.58,.1,.12,.06,.93,.34,.04,.74,.61,.08,.89,.76,.01,0,.35,.52,.35,.8,.84,0,0,.53,.57,.14,.98,.63,.65,.28,.8,.27,.88,.3,.73,.03,.54,.86,.12,.6,.29,.65,0,.01,.67,.95,.69,.72,.77,.31,.88,.09,.18,.7,.62,.94,.06,0,0,.32,.77,.57,.05,.19,.35,.94,.29,.52,.98,.5,.02,.41,.33,.56,.14,.08,.03,.51,0,.96,.86,.16,.25,.69,0,.93,.36,.16,.63,.01,.1,0,.02,.75,.65,.83,.71,.5,.02,0,0,.02,.37,.36,.93,.66,.02,.26,0,.4,.55,.47,.2,.35,.97,.89,.11,.7,.73,.38,0,.11,.08,.03,.66,.82,.3,.96,.73,.38,.67,.45,.57,.14,.91,.96,.43,.58,.17,0,.27,.35,.54,.67,.97,.8,.79,.76,.06,.04,0,.47,.88,0,.77,.16,.19,.28,.11,.05,.35,.12,.23,.17,.19,.73,.13,.06,.76,.54,.87,.48,.69,.93,.59,.55,.45,.68,0,.22,.07,.03,.67,.03,.21,.98,.16,.19,.92,.89,.17,.26,.09,.67,.65,.16,.98,.63,.23,.66,.86,0,0,.73,.75,.73,0,0,.14,0,0,.06,.73,.58,0,.1,.95,.01,.46,.67,0,.81,.81,.43,1,.87,.04,.83,.32,.38,0,.57,.84,.48,.29,.53,0,.33,.46,.5,.55,.09,.39,.83,.24,.01,.04,.75,.39,.05,.6,.97,.22,.1,.16,0,.61,.03,.33,0,0,.85,.9,.55,.45,.08,.34,.62,.63,.4,.13,.68,.25,.5,.69,.71,.77,.55,0,.01,.71,.09,.73,.19,.22,.44,.31,.99,.81,.7,.59,.81,.5,.01,.44,.69,.46,.71,.73,.42,.18,.81,.43,0,.52,.7,.24,.7,.35,.72,.2,.42,0,.02,.02,.9,.19,.16,.13,0,.77,0,0,.8,.63,.5,0,.67,.56,0,.19,.03,.85,0,.25,.83,.11,.68,.74,.66,.14,.74,0,.71,.39,.4,.3,.66,.16,.09,.18,.83,.01,.53,.17,0,.01,.87,.55,.36,.86,.65,.46,.07,.79,.01,.44,0,0,.14,.91,.33,.55,.66,.94,0,.09,.03,.6,.41,.78,.02,0,.08,.69,0,.59,.54,.84,.72,0,.7,.48,.53,.03,0,.16,.09,.02,0,.52,0,.18,.79,.75,.99,0,.38,.46,.69,.06,.22,0,.09,.96,.68,.57,0,.77,.32,.44,.91,.76,.56,.96,.8,.99,.07,.99,.01,.02,.39,.7,.55,.5,0,.2,0,0,.28,.49,.87,.08,.59,.44,0,.58,.44,.9,.42,.01,.87,0,.83,.49,.52,.69,.03,0,.94,.11,.15,.73,.37,.71,.26,.51,.44,.56,.48,.51,.15,0,.01,.33,.95,.69,.26,.32,.8,0,0,.04,0,0,.93,.01,.63,.09,.36,.02,.05,.01,.01,.14,0,.37,.57,.75,.11,.88,.18,.64,.01,.05,.68,.3,.74,.69,.01,.01,.78,.05,.85,.71,0,.65,0,.04,.44,.41,.72,.5,.33,.13,.48,0,.66,.29,.15,.26,.32,0,.03,.22,.83,.9,0,.81,.03,.02,.41,.29,.22,.04,0,.83,.82,.1,.89,.72,.81,.97,.43,0,.86,0,.82,.38,.71,0,.91,0,.07,.75,.6,.72,.91,.29,0,1,.62,.69,.2,.51,.39,.78,.37,.68,.75,.4,.5,.05,.67,.35,.14,.35,0,.03,0,.85,0,.06,.98,.16,.04,.86,.33,.56,.48,.1,.62,.25,.01,.85,.68,.77,0,.03,.07,.01,0,.81,0,0,.69,.32,.27,.94,.03,.2,.39,.01,.96,0,0,.33,.04,.88,0,.17,.03,.99,.07,.01,.15,.01,.7,.02,.62,.39,.08,.12,0,.8,.39,.01,.78,.61,.02,.76,.91,.86,.29,0,.3,.47,.59,0,.41,.87,.51,.11,.18,.91,.19,0,.07,.15,.16,.61,.46,.82,.95,.14,.47,.44,.43,0,.01,.97,.25,0,.04,0,.9,.3,.71,.02,.5,.28,0,.93,0,.47,0,.33,0,.27,.06,.09,.91,.51,0,.89,.26,.24,.88,.01,.67,.23,.79,.96,0,.68,.59,.31,.87,.14,.55,.56,.41,.26,.64,.39,0,.88,0,.42,.97,.08,.78,.91,.28,.08,.75,.41,.3,.09,.15,.99,.61,.69,.71,.41,.41,.95,.78,.55,.75,.36,.61,.28,.99,.28,.06,.76,0,0,.5,.35,.18,.19,.09,.3,.21,.59,.65,.48,.73,.17,.74,0,.83,0,0,.12,.02,.71,.35,.56,.1,.57,.03,.24,.02,.05,.15,.04,.26,.11,.02,.1,0,.11,0,0,.4,.36,.26,.94,.63,.55,.8,.03,.99,.06,.25,.05,.73,.87,.38,0,.47,.06,0,.11,.11,.02,.09,.34,.06,.29,.94,.07,.31,.68,.76,.64,0,.03,0,.95,0,.8,.78,.5,.76,.47,.02,.39,0,0,.09,.14,.84,.54,.94,0,.02,.43,.43,.46,0,.36,.34,.98,.74,.01,0,.32,.46,.56,.43,.43,.03,.97,0,.7,.54,.53,.15,.95,.3,.07,.62,.21,.01,.7,.67,.43,.41,.19,.05,.09,.93,.94,.63,.2,.25,.35,.73,.45,1,.45,.35,.02,0,.79,.12,.26,.4,.01,.24,.76,.98,.44,.06,.66,0,0,.13,0,.89,.97,.06,.24,.05,.16,.89,.02,0,.92,.74,.08,0,.86,.64,0,.01,.8,.78,0,.64,.11,.56,.88,.01,.01,0,.42,.18,.45,0,.99,0,0,.56,.37,0,.24,.22,.84,.92,.87,.47,.27,.15,0,.44,.13,.32,.06,.71,.04,.01,.57,.59,.82,.02,.88,.35,0,.72,.65,.95,.47,.17,.58,.52,.08,.85,0,.98,.63,.82,.77,.01,.12,0,.75,.41,.8,.37,.16,.79,.56,.34,0,0,.58,.84,.25,0,.38,.45,.17,.08,.74,.69,0,0,0,.03,.74,.12,.03,.24,.99,.47,.63,.89,.62,0,.14,0,0,.37,.81,.95,.04,0,.37,0,.27,.97,0,.4,.65,0,0,0,.23,.6,.2,.88,.69,0,.89,.48,.97,.04,.07,.27,.12,.59,0,.66,.14,.96,.97,.85,.5,.59,0,.39,.26,.26,0,.97,.18,.87,0,.79,.72,.06,0,.47,.37,.57,.1,.49,.03,.44,.92,.13,.27,.62,.63,.17,.03,.07,.74,.35,.28,.8,.02,.15,.44,.5,.31,0,.87,.73,.76,.56,0,.15,.08,0,.36,.9,0,.61,.64,.98,.27,.93,.26,.55,.6,.12,.13,.83,.01,.69,.19,.7,0,.79,.57,.69,.02,.07,.91,0,.83,.93,.23,.84,.25,0,.99,.29,.86,.6,.45,.36,.45,0,.79,.38,.62,.42,.35,.25,.62,.57,.71,.14,.86,0,.8,.61,.62,.12,.48,.28,.93,.94,.33,.56,.57,0,.57,.91,.73,.05,.97,.16,.45,.34,.12,.67,0,.91,.14,.27,.16,.05,.26,.29,.73,.34,.17,.27,0,.59,.35,0,.87,.57,.36,.9,.97,.2,.51,.87,0,.64,.77,.16,.06,.4,.59,.41,.65,.02,.61,.3,.7,.32,.69,.01,0,.62,.01,.88,.13,.85,.36,0,.5,.3,.3,.6,.67,0,.51,.14,.33,.68,.66,.74,.4,.1,.06,.58,.02,0,.02,.5,.68,.51,.97,.96,.14,.94,0,.91,.14,.86,0,.55,.92,.93,.01,.19,.6,0,.35,.98,.25,.45,.64,.11,.34,.91,.72,.21,.14,.72,.54,.13,.22,.22,.96,.5,.8,.38,.57,.95,.41,.54,.18,.12,.05,.69,0,.82,.33,0,0,.44,.56,.77,.44,.75,.52,.22,.01,.23,.85,.79,0,.26,.12,.72,.67,.04,.13,.83,.74,.28,.52,.44,.5,.63,.91,.98,.66,.47,.21,0,.53,.92,.93,.22,.02,.36,.65,0,.54,.18,.1,.63,.09,.76,.09,.12,.25,.32,.89,.39,.9,.47,.83,.57,.96,.15,.28,0,.99,.07,.28,.24,.5,.75,.19,.78,.53,.41,.26,.49,.84,.41,.66,.7,.19,.27,.14,.11,.32,.24,.04,.47,.71,.64,.9,.96,.12,.95,.18,.45,.69,.12,.09,.19,.47,0,.04,.11,.45,.66,.17,.11,.48,0,.55,.04,.07,.52,.09,.06,.38,.35,.15,.73,.4,.28,0,.11,.03,.13,.78,.64,.2,.67,.4,.97,.01,.78,1,.13,.06,.48,.47,.34,.18,.01,.88,.7,.02,.62,.92,.31,.47,.05,.6,.49,.47,.25,.03,.51,.25,.24,.66,.42,.53,.53,.86,.09,0,.88,0,.09,.88,.03,.41,.19,.72,.3,.64,.44,.47,.53,.05,0,.1,.73,.16,.2,.32,.3,.17,.73,.74,.4,.41,.86,.19,.81,.36,.81,.57,.35,.53,.08,.98,.81,.5,.03,.5,.32,.38,.82,.94,.54,.4,.02,.62,.99,.79,1,0,0,1,.84,.52,.05,.23,.85,.64,.83,.09,.26,.53,0,.05,.1,.01,.99,.62,.27,.99,.04,.32,.5,.05,.25,.62,.17,.5,.89,.64,.74,0,.26,.14,.22,.92,.05,.98,.78,0,.58,.22,0,.62,.46,.45,.83,.55,.57,.49,.55,.66,.64,.85,.84,.85,.86,.29,.44,.43,.71,.07,.67,.32,.47,.9,.41,.08,.58,.02,.53,.29,.04,.16,.04,.72,.76,.66,.71,0,.29,.15,.52,.53,.64,.66,.67,.6,.48,.02,.78,.36,.48,.04,.37,.5,.3,.77,.46,.13,.94,.28,.92,.03,.04,.07,.04,0,0,.18,.2,.65,.12,.92,0,.23,.08,.68,0,.79,.48,0,.85,.18,.95,.82,.17,.65,.75,.25,.88,0,.73,.79,0,.9,.4,.21,.75,.59,.9,.29,.26,.35,.41,.07,.84,.3,.41,.37,.95,.05,0,.03,0,.04,.7,.53,.59,.4,1,.22,.68,.28,.61,0,.89,.01,.28,.62,0,0,.98,.02,0,.05,.68,.62,.01,.33,.07,.89,.71,.01,.12,.4,.31,.26,.02,.61,0,.46,.86,.5,0,.21,.59,0,.43,.97,0,.53,.04,.54,.02,.45,.09,.47,0,0,.43,.45,.09,.74,.55,.02,.2,.37,.69,.37,.99,0,.95,.61,.32,.14,.01,0,.53,0,.84,.93,.9,.84,.06,0,.32,.92,.03,0,.02,.7,0,.87,.01,.42,.88,.07,.21,.58,.05,.02,.75,.07,.82,.18,.63,.14,.75,.02,.79,.2,.41,.27,0,.52,.58,.82,.04,.02,.68,0,.52,.48,.74,0,.46,.02,.78,.94,.09,.99,.31,.77,.68,.32,.62,.05,0,.48,0,.91,.84,.7,.53,.42,.95,.15,.65,.96,.51,.73,.44,.76,0,.43,.66,.75,.97,.06,.45,1,.53,.7,.08,.56,.69,.91,.15,.12,.12,.26,.2,0,0,0,0,0,.68,.79,.93,0,.06,.92];export{a as pvalData};
